
import base64
import sys
import time
import os
import random
import cv2  # 导入opencv库
# 读取一张图片，地址不能带中文

currentTime = time.time()
imgviewx = cv2.imread("./images/custom.dng")
# imgviewx = cv2.imread(sys.argv[1])
# 翻转
# imgviewx = cv2.flip(imgviewx, -1)
# imgviewx[0 : imgviewx.shape[0], 0 : imgviewx.shape[1], 1] = 0   
output = (
    "/Users/weiyajun/work/myProject/basics-learn/python/image-handle/images/tmp.dng"
)
# os.remove(output)
print(output)
print(cv2.imwrite(output, imgviewx))
print(output)
