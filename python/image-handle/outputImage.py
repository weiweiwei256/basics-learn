
import base64
import sys
import time
import os
import random
import cv2  # 导入opencv库
# 读取一张图片，地址不能带中文

currentTime = time.time()
# imgviewx = cv2.imread("./images/plant.jpg")
imgviewx = cv2.imread(sys.argv[1])
# 翻转
# imgviewx = cv2.flip(imgviewx, -1)
# imgviewx[0 : imgviewx.shape[0], 0 : imgviewx.shape[1], 1] = 0   
print('22212121asdf1ve')

# output = (
#     "/Users/weiyajun/work/myProject/basics-learn/python/image-handle/images/tmp"+ str(random.random()) +".png"
# )
output = (
    "/Users/weiyajun/work/myProject/basics-learn/python/image-handle/images/tmp.png"
)
# os.remove(output)
print(output)
print(cv2.imwrite(output, imgviewx))
print(time.time())
print(output)
