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


class FreestoneBasePlugin:
    # 运行模式 默认时run 执行main方法，设置config则返回配置
    __RUN_MODE = "run"
    __CONFIG_MODE = "config"
    __OUTPUT_FOLDER = os.path.abspath(os.path.join(currentPath, "../.freestone"))
    outputIndex = 1
    pluginResult = []

    def __init__(self):
        self.mode = FreestoneBasePlugin.__RUN_MODE

    @staticmethod
    @property
    def OUT_AAA():
        return FreestoneBasePlugin.__CONFIG_MODE

    def standardPrint(self, info, category=""):
        print("[freestone] " + category + str(info))

    def getConfig(self):
        return []

    def getOutputPath(self, ext="png", matName=""):
        if not os.path.exists(FreestoneBasePlugin.__OUTPUT_FOLDER):
            os.makedirs(FreestoneBasePlugin.__OUTPUT_FOLDER)
            pass

        fileName = os.path.splitext(os.path.basename(currentPath))[0]
        if matName:
            fileName = matName
        else:
            fileName += "_output_" + str(self.outputIndex)
            self.outputIndex += 1

        outputPath = os.path.abspath(
            os.path.abspath(
                os.path.join(FreestoneBasePlugin.__OUTPUT_FOLDER, fileName + "." + ext)
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
                    """python3  image-handle/FreestoneBasePlugin.py -c '{"path": "/Users/weiyajun/work/myProject/basics-learn/python/image-handle/images/plant.jpg", "num": 222}'"""
                )
                sys.exit()
            elif opt in ("-m", "--mode"):
                self.mode = FreestoneBasePlugin.__CONFIG_MODE
            elif opt in ("-o", "--output"):
                FreestoneBasePlugin.__OUTPUT_FOLDER = val
            elif opt in ("-c", "--config"):
                configDict = json.loads(val)
                for key in configDict:
                    for i in range(len(pluginConfig)):
                        if pluginConfig[i]["name"] == key:
                            pluginConfig[i]["value"] = configDict[key]

        if self.mode == FreestoneBasePlugin.__CONFIG_MODE:
            self.standardPrint(pluginConfig, "[pluginConfig] ")
        if self.mode == FreestoneBasePlugin.__RUN_MODE:
            configVal = self.__getConfigVal(pluginConfig)
            self.main(configVal)
            self.standardPrint(self.pluginResult, "[pluginOutput] ")


class DemoPlugin(FreestoneBasePlugin):
    def __init__(self):
        FreestoneBasePlugin.__init__(self)

    # def getConfig(self):
    #     return [
    #         {
    #             "name": "mat",
    #             "desc": "支持针对mat参数的处理",
    #             "type": "mat",
    #             "default": "",
    #         },
    #         {
    #             "name": "path",
    #             "desc": "这是个测试的参数",
    #             "require": "true",
    #             "type": "path",
    #             "default": "/Users/weiyajun/work/myProject/basics-learn/python/image-handle/images/plant.jpg",
    #         },
    #         {
    #             "name": "num",
    #             "type": "number",
    #             "default": 20,
    #             "options": {
    #                 "min": 0,
    #                 "max": 255,
    #             },
    #         },
    #     ]

    def main(self, config: dict):
        print("----------------------")
        print(type(DemoPlugin.OUT_AAA))
        # mat=''
        # path, mat, num, = (
        #     config.get("path"),
        #     config.get("mat"),
        #     config.get("num"),
        # )
        # imgview = ""
        num = 2
        # if not mat:
        imgview = cv2.imread('/Users/weiyajun/work/myProject/basics-learn/python/image-handle/images/plant.jpg')
        # else:
        #     imgview = mat

        imgview = cv2.flip(imgview, -1)
        self.output(imgview,'a')
        imgview[0 : imgview.shape[0], 0 : imgview.shape[1], 1] = num
        self.output(imgview, "x")
        imgview[0 : imgview.shape[0], 0 : imgview.shape[1], 1] = num + 100
        self.output(imgview, "c")
        imgview[0 : imgview.shape[0], 0 : imgview.shape[1], 1] = 0
        self.output(imgview, "e")


DemoPlugin()(sys.argv[1:])
