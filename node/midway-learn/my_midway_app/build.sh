#!/usr/bin/env bash
# build.sh <envType>
# node-scripts 自动生成，请勿修改，并保证上传到 gitlab 上

set -e

BASE_DIR=${PWD}
echo "------------- build.sh start, pwd: ${PWD}, schema: ${SCHEMA_NAME}, envType: ${ENV_TYPE}, appname: ${APP_NAME}, baseDir: ${BASE_DIR} at $(date +%Y/%m/%d\ %H:%M:%S) ------------"

DEPS_TREE_ARG_PART="--deps-tree"

safe_remove_dir() {
  # safe_remove 命令不存在就使用 rm -rf 代替
  # safe_remove 只在 aone 环境存在
  if command -v safe_remove >/dev/null 2>&1; then
    safe_remove $@
  else
    rm -rf $@
  fi
}

if [ -d ./node_modules ]; then
  echo "[node-scripts] remove exist node_modules directory!"
  safe_remove_dir ./node_modules
fi

# 打印打包服务器的操作系统版本
cat /proc/version
ls -al /etc/*-release
cat /etc/*-release
uname -a

BEFORE_ALL=$(date +%s%3N)
if hash nvm 2>/dev/null; then
  # 5u 的机器用 6 的版本，7u 的版本用 10
  if [[ "`uname -a`" != *alios7* ]]; then
    nvm install 6
  else
    nvm install 10
  fi
fi

# 会被 postinstall.js 自动判断替换
TNPM_VERSION='latest'
# 依赖安装模式
INSTALL_DEPS_MODE='';

NPM_TMP_GLOBAL_DIR=${BASE_DIR}/.npm_global
safe_remove_dir ${NPM_TMP_GLOBAL_DIR}
mkdir -p ${NPM_TMP_GLOBAL_DIR}/tmp

BEFORE_TNPM=$(date +%s%3N)
echo nvm:$((${BEFORE_TNPM} - ${BEFORE_ALL}))ms >> ${APP_NAME}.stepcost

# 以下静态版本的 tnpm 来自 https://code.aone.alibaba-inc.com/node/tnpm 提供
curl -sL https://registry.npm.alibaba-inc.com/tnpm/${TNPM_VERSION} -o ${NPM_TMP_GLOBAL_DIR}/tmp/package.json
PACKAGE_VERSION="$(node -pe "require('${NPM_TMP_GLOBAL_DIR}/tmp/package.json').version")"

echo "Installing standalone tnpm@${PACKAGE_VERSION} to ${NPM_TMP_GLOBAL_DIR}/tnpm ..."

curl -sL https://registry.npm.alibaba-inc.com/tnpm/download/tnpm-${PACKAGE_VERSION}.tgz -o ${NPM_TMP_GLOBAL_DIR}/tmp/tnpm-${PACKAGE_VERSION}.tgz || exit 1
ls -ahl ${NPM_TMP_GLOBAL_DIR}/tmp/tnpm-${PACKAGE_VERSION}.tgz
safe_remove_dir ${NPM_TMP_GLOBAL_DIR}/tmp/package
tar -zxf ${NPM_TMP_GLOBAL_DIR}/tmp/tnpm-${PACKAGE_VERSION}.tgz -C ${NPM_TMP_GLOBAL_DIR}/tmp || exit 1

tar -zxf ${NPM_TMP_GLOBAL_DIR}/tmp/package/tnpm.tgz -C ${NPM_TMP_GLOBAL_DIR} || exit 1
ls -ahl ${NPM_TMP_GLOBAL_DIR}

${NPM_TMP_GLOBAL_DIR}/tnpm/bin/tnpm -v || exit 1

export PATH=${BASE_DIR}/node_modules/.bin:${NPM_TMP_GLOBAL_DIR}/tnpm/bin:${BASE_DIR}/.node/bin:${BASE_DIR}/.bin:/usr/local/gcc-5.2.0/bin:$PATH

tnpm -v

BEFORE_CHECK=$(date +%s%3N)
echo tnpm:$((${BEFORE_CHECK} - ${BEFORE_TNPM}))ms >> ${APP_NAME}.stepcost

# http://gitlab.alibaba-inc.com/node/precompile-check/tree/master 不允许直接依赖的模块检查
mkdir precompile-check-tmp
cp package.json precompile-check-tmp
cd precompile-check-tmp
tnpm i @ali/precompile-check
node node_modules/@ali/precompile-check/index.js
cd ..

safe_remove_dir precompile-check-tmp

BEFORE_INSTALL=$(date +%s%3N)
echo precompile_check:$((${BEFORE_INSTALL} - ${BEFORE_CHECK}))ms >> ${APP_NAME}.stepcost

time tnpm i --internal-oss-cache ${DEPS_TREE_ARG_PART} ${INSTALL_DEPS_MODE} --aone_app_pwd=${BASE_DIR} --aone_env_type=${ENV_TYPE} --aone_app_name=${APP_NAME} --aone_schema=${SCHEMA_NAME} || exit $?

BEFORE_PROXY=$(date +%s%3N)
echo install:$((${BEFORE_PROXY} - ${BEFORE_INSTALL}))ms >> ${APP_NAME}.stepcost

# 尝试执行 tnpm run autoproxy 自动生成 proxy 代码
echo "[node-scripts] try tnpm run autoproxy... at $(date +%Y/%m/%d\ %H:%M:%S) "
AUTOPROXY_ERROR=0
AUTOPROXY_OUTPUT=`tnpm run autoproxy 2>&1` || AUTOPROXY_ERROR=1
if [[ ${AUTOPROXY_ERROR} -eq 1 ]]
  then
  if [[ ${AUTOPROXY_OUTPUT} != *"missing script: autoproxy"* ]]
    then
    echo "${AUTOPROXY_OUTPUT}"
    echo "[node-scripts] autoproxy error! please check your npm autoproxy script! at $(date +%Y/%m/%d\ %H:%M:%S) "
    exit 1
  else
    echo "[node-scripts] npm autoproxy script not exist, skip. at $(date +%Y/%m/%d\ %H:%M:%S) "
  fi
else
  echo "${AUTOPROXY_OUTPUT}"
  echo "[node-scripts] autoproxy success!"
fi

BEFORE_CUSTOM=$(date +%s%3N)
echo autoproxy:$((${BEFORE_CUSTOM} - ${BEFORE_PROXY}))ms >> ${APP_NAME}.stepcost

# 执行 tnpm run build 来进行应用自定义的构建
echo "[node-scripts] start custom build: tnpm run build... at $(date +%Y/%m/%d\ %H:%M:%S) "

BUILD_RESULT_TEMP=`mktemp`
export BUILD_RESULT_TEMP
BUILD_OUTPUT_TEMP=`mktemp`
BUILD_ERROR=0

# subshell, 通过临时文件传递执行结果
# (tnpm run build 2>&1 ||: ; echo "$?" > $BUILD_RESULT_TEMP) | tee $BUILD_OUTPUT_TEMP
(BUILD_ERROR=0;echo $BUILD_RESULT_TEMP; tnpm run build 2>&1 || BUILD_ERROR=1; echo $BUILD_ERROR > $BUILD_RESULT_TEMP) | tee $BUILD_OUTPUT_TEMP

AFTER_CUSTOM=$(date +%s%3N)
echo custom_script:$((${AFTER_CUSTOM} - ${BEFORE_CUSTOM}))ms >> ${APP_NAME}.stepcost

BUILD_ERROR=`cat $BUILD_RESULT_TEMP`
BUILD_OUTPUT=`cat $BUILD_OUTPUT_TEMP`

echo "[node-scripts] custom build return code: $BUILD_ERROR"

if [[ $BUILD_ERROR -eq 0 ]]
then
  echo "[node-scripts] custom build success!"
else
  if [[ $BUILD_OUTPUT != *"missing script: build"* ]]
  then
    echo "[node-scripts] custom build error! please check your npm build script! at $(date +%Y/%m/%d\ %H:%M:%S) "
    exit 1
  else
    echo "[node-scripts] npm build script not exist, skip custom build. at $(date +%Y/%m/%d\ %H:%M:%S) "
  fi
fi

echo "[node-scripts] build success! at $(date +%Y/%m/%d\ %H:%M:%S) "

# 删除安装的devDeps依赖, 重新安装线上依赖
if [ -z ${INSTALL_DEPS_MODE} ]
  then
  safe_remove_dir node_modules
  # 安装线上依赖
  time tnpm i --internal-oss-cache ${DEPS_TREE_ARG_PART} --production --aone_app_pwd=${BASE_DIR} --aone_env_type=${ENV_TYPE} --aone_app_name=${APP_NAME} --aone_schema=${SCHEMA_NAME} || exit $?
fi

# http://gitlab.alibaba-inc.com/node/sigma/issues/26488 解决 CPU Share 化后 egg 自动获取到的核心数太多的问题
tnpm i @ali/sigma --production --internal-oss-cache

echo "[node-scripts] reporting package.json to npm.alibaba-inc.com ... at $(date +%Y/%m/%d\ %H:%M:%S) "
tnpm i @ali/node-app-reporter@1 --internal-oss-cache
# $ node-app-reporter [baseDir] [appname] [buildId] [buildAuthor]
node-app-reporter ${BASE_DIR} ${APP_NAME} ${ENV_TYPE}

# 删除临时的 ${NPM_TMP_GLOBAL_DIR} 目录
safe_remove_dir ${NPM_TMP_GLOBAL_DIR}
echo "[node-scripts] report success! at $(date +%Y/%m/%d\ %H:%M:%S) "

AFTER_ALL=$(date +%s%3N)
echo finalize:$((${AFTER_ALL} - ${AFTER_CUSTOM}))ms >> ${APP_NAME}.stepcost

echo "step_cost:"
cat ${APP_NAME}.stepcost
