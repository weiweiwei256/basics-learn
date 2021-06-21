import cv2  # 导入opencv库
import sys
import os
import getopt
import json

currentPath = os.path.abspath(sys.argv[0])
annotation = """
插件执行命令说明
-m,--mode 参数： 可缺省。
    缺省时：基于设置的参数或者默认参数值自动执行main方法。
    getconfig: 输出参数信息

-c,--config 参数： 可缺省。配置参数值，未设置则使用，默认值。参数格式为 str(dictionary)
    str:设置后默认参数merge后作为参数。
-o,--output 参数： 可缺省。默认当前路径 文件路径。
"""

class BasePlugin:
    # 运行模式 默认时run 执行main方法，设置config则返回配置
    __RUN_MODE = "run"
    __CONFIG_MODE = "config"
    __OUTPUT_FOLDER = os.path.abspath(os.path.join(currentPath, "../.freestone"))
    outputIndex = 1
    pluginResult = []
    mode = __RUN_MODE

    def __init__(self):
      pass

    def standardPrint(self, info, category=""):
        print("[freestone] " + category + str(info))

    def getConfig(self):
        return []

    def getOutputPath(self, ext="png", matName=""):
        if not os.path.exists(BasePlugin.__OUTPUT_FOLDER):
            os.makedirs(BasePlugin.__OUTPUT_FOLDER)
            pass

        fileName = os.path.splitext(os.path.basename(currentPath))[0]
        if matName:
            fileName = matName
        else:
            fileName += "_output_" + str(self.outputIndex)
            self.outputIndex += 1

        outputPath = os.path.abspath(
            os.path.abspath(
                os.path.join(BasePlugin.__OUTPUT_FOLDER, fileName + "." + ext)
            )
        )
        return outputPath

    def __getConfigVal(self, config):
        configVal = {}
        for i in range(len(config)):
            print(config[i])
            if config[i].get("value"):
                configVal[config[i].get("name")] = config[i].get("value")
            else:
                configVal[config[i].get("name")] = config[i].get("default")
        return configVal

    def main(self):
        print("your should inherit main method with core logic of handle image.")

    def output(self, mat, matName="", ext="png"):
        tmpPath = self.getOutputPath(ext, matName)
        self.pluginResult.append(tmpPath)
        cv2.imwrite(tmpPath, mat)

    def __call__(self, *args, **kwds):
        pluginConfig = self.getConfig()
        try:
            opts, config = getopt.getopt(
                args[0], "hc:m:o:", ["config=", "mode=", "output="]
            )
        except getopt.GetoptError:
            print(annotation)
            sys.exit(2)
        for opt, val in opts:
            if opt == "-h":
                print(annotation)
                print(
                    """python3  image-handle/BasePlugin.py -c '{"path": "/Users/weiyajun/work/myProject/basics-learn/python/image-handle/images/plant.jpg", "num": 222}'"""
                )
                sys.exit()
            elif opt in ("-m", "--mode"):
                self.mode = BasePlugin.__CONFIG_MODE
            elif opt in ("-o", "--output"):
                BasePlugin.__OUTPUT_FOLDER = val
            elif opt in ("-c", "--config"):
                configDict = json.loads(val)
                for key in configDict:
                    for i in range(len(pluginConfig)):
                        if pluginConfig[i]["name"] == key:
                            pluginConfig[i]["value"] = configDict[key]

        if self.mode == BasePlugin.__CONFIG_MODE:
            self.standardPrint(pluginConfig, "[pluginConfig] ")
        if self.mode == BasePlugin.__RUN_MODE:
            configVal = self.__getConfigVal(pluginConfig)
            self.main(configVal)
            self.standardPrint(self.pluginResult, "[pluginOutput] ")
