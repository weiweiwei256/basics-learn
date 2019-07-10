var str = "I'm child";
exports.str = str;
console.error('-------------child--------------------')
// console.log(require.main);   //输出入口模块   拿不到export 可通过 require.main === module 判断是否是主入口
