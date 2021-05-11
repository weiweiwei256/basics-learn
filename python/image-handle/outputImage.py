import cv2  # 导入opencv库
import base64
import sys
import time

# 读取一张图片，地址不能带中文

currentTime = time.time()
imgviewx = cv2.imread("./images/plant.jpg")
imgviewx = cv2.imread(sys.argv[1])
# 翻转
imgviewx = cv2.flip(imgviewx, -1)




output = (
    "/Users/weiyajun/work/myProject/basics-learn/python/image-handle/images/tmp.png"
)

print(cv2.imwrite(output, imgviewx))
print('sdfsdfdf')
print(output)
