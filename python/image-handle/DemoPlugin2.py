# 可以参考
import cv2  # 导入opencv库
import sys
import os
from FreestoneBasePlugin import BasePlugin

class DemoPlugin(BasePlugin):

    # 定义插件参数，可不实现。FreeStone可以基于配置提供可视化编辑的视图。
    def getConfig(self):
        return []

    # 插件处理图片的主逻辑。config是插件参数的值。如果不定义getConfig则为空字典。
    def main(self, config: dict):
        imagePath = os.path.abspath(os.path.join(sys.argv[0],'../demo.jpg'))
        print(imagePath)
        imgview = cv2.imread(
           imagePath
        )
        imgview = cv2.flip(imgview, -1)

        # 调用父类的output方法输出图片到文件。
        self.output(imgview)
        imgview[0 : imgview.shape[0], 0 : imgview.shape[1], 1] = 0
        self.output(imgview, "output1")
        imgview[0 : imgview.shape[0], 0 : imgview.shape[1], 1] = 100
        self.output(imgview, "final")

# 用来执行定义的main方法
DemoPlugin()(sys.argv[1:])