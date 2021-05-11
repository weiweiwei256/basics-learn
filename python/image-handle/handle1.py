import cv2  # 导入opencv库
import numpy as np

# .........................................................................
# 读取一张图片，地址不能带中文
"""
第二个参数，取值可为：
cv2.IMREAD_COLOR：默认参数，读入一副彩色图片，忽略alpha通道
cv2.IMREAD_GRAYSCALE：读入灰度图片
cv2.IMREAD_UNCHANGED：读入完整图片，包括alpha通道(png有，jpg无）
"""
# imgviewx=cv2.imread("imgx/wa.jpg")
imgviewx = cv2.imread("images/plant.jpg", cv2.IMREAD_COLOR)

# for B in range(0, imgviewx.shape[0]):
#     for G in range(0, imgviewx.shape[1]):
#         rgb = imgviewx[B][G]
#         imgviewx[B][G][1] = 0

imgviewx[0 : imgviewx.shape[0], 0 : imgviewx.shape[1], 1] = 0


# .........................................................................
# 获取图片信息
# 一个像素有三个通道，BGR
print(imgviewx.shape)  # 输出：(1080, 1920, 3) 高像素，宽像素，通道数
print(imgviewx.size)  # 120000  总通道数=高* 宽* 通道数
print(imgviewx.dtype)  # uint8  3个通道每个通道占的位数（8位，一个字节）
# print(imgviewx) #输出效果视乎与下条相同
# print(np.array(imgviewx)) #输出每个像素点的参数（ B , G , R )
# 获取图片 B G R 各均值， #(204.46305102040816, 208.50832244897958, 217.29540408163263, 0.0) ，红色部分最多
print(cv2.mean(imgviewx))
# 获取方差,也会打印均值，可用均值方差都为零判断图片无效
# print(cv2.meanStdDev(imgviewx))


# .........................................................................
# 图片处理
# 备份图片
imgviewx1 = imgviewx.copy()

# 均值模糊,主要用于去除图片噪点
# 读取图片并实现图片的模糊效果，参数：（读取图片，（X轴方向模糊，Y轴方向模糊））
# imgviewx=cv2.blur(imgviewx,(5,5))

# 中值模糊，主要用于去除椒盐（烧烤配料）噪点
# 参数：（图片信息，模糊值）
# imgviewx=cv2.medianBlur(imgviewx,9)

# 普通高斯模糊
# 参数：（图片信息，参数1，参数2）参数1和参数2只能设置一个
# imgviewx=cv2.GaussianBlur(imgviewx,(0,0),1)

# 保留边缘（像素差），高斯模糊
# 参数（图片信息，0，要用怎样的方式（越大则越细），空间复杂度（越大越复杂））
imgviewx = cv2.bilateralFilter(imgviewx, 0, 50, 6)


# 美颜,美白效果valuex值越大越白
# valuex=50;
# imgviewx=cv2.bilateralFilter(cv2.imread("imgx/zcy.jpg"),valuex,valuex * 2,valuex / 2)

# 对比度和亮度调整
# duix=0.5 #对比度
# lightx=0  #亮度
# imgviewx=cv2.addWeighted(imgviewx,duix,np.zeros(imgviewx.shape,imgviewx.dtype),1-duix,lightx)


# 显示文字
# 参数：图像，文字内容， 坐标( x , y ) ，字体，大小，颜色( B , G ,R )，字体厚度
# 颜色值为0-255
font = cv2.FONT_HERSHEY_SIMPLEX  # 定义字体
imgviewx = cv2.putText(imgviewx, "Weiyajun", (10, 50), font, 1.2, (0, 0, 255), 5)


# 像素取反
# imgviewx=cv2.bitwise_not(imgviewx)


# 遍历图片，效率低,不推荐使用
def xgtp():
    global imgviewx
    gx, kx, tx = imgviewx.shape  # 得到像素高度，像素宽度，通道数

    for g in range(0, gx):
        for k in range(0, kx):  # 这里得到的是每个像素点，每个点由RGB三色构成
            if k > 0 and k < 100:
                imgviewx[g, k, 0] = 0  # B
                imgviewx[g, k, 1] = 255  #  G
                imgviewx[g, k, 2] = 255  #  R
            else:
                imgviewx[g, k, 0] = imgviewx[g, k, 0]  # 获取到原来的值
                imgviewx[g, k, 1] = imgviewx[g, k, 1]
                imgviewx[g, k, 2] = imgviewx[g, k, 2]


# 创建一个图形，使用np,所以效率高
def cjtx():
    # 初始化像素点值全为0 （rgb都为零，所以是黑色）
    # 参数：（[高，宽，通道数],每个通道占的位数（一个字节））
    imgx = np.zeros([400, 600, 3], np.uint8)

    # 初始化像素点值为全为1
    # imgx[110:130,50:70,2]表示一个范围：[高度起始点：高度结束点，宽度起始点：宽度结束点，哪个通道]，起始点均以左上角
    # imgx[:,:,0]=np.ones([400,600],np.uint8)*255  #最终结果为第一个通道（B)全为255，所以是蓝色
    imgx[110:130, 50:70, 1] = np.ones([20, 20], np.uint8) * 255
    cv2.imshow("第二个图形窗口", imgx)


# 图片区域处理
def pictureArea():
    global imgviewx
    # 得到截图
    areax = imgviewx[110:529, 778:1200]
    # 将图片由RGB（3通道）转换为灰度（2通道）
    areax = cv2.cvtColor(areax, cv2.COLOR_BGR2GRAY)
    # 将图片有2通道还原成3通道，但色彩不能还原
    areax2 = cv2.cvtColor(areax, cv2.COLOR_GRAY2RGB)
    # 处理后的区域写到原图上
    imgviewx[110:529, 778:1200] = areax2
    # 显示截图
    cv2.imshow("area", areax)


# 泛洪填充，相似像素填充
def fill_color():
    global imgviewx
    h, w, t = imgviewx.shape
    # 必要参数
    maskx = np.zeros([h + 2, w + 2], np.uint8)
    # 参数接收：（图片信息，必要参数，参考点位置坐标，填充的颜色，查找范围：最低像素（参考减所写），查找范围：最高像素（参考加所写），全部填充）
    cv2.floodFill(
        imgviewx,
        maskx,
        (100, 100),
        (0, 255, 0),
        (100, 100, 100),
        (50, 50, 50),
        cv2.FLOODFILL_FIXED_RANGE,
    )


# 通道分离与合并
def tongdao():
    global imgviewx
    b, g, r = cv2.split(imgviewx)  # 通道分离
    cv2.imshow("bb", b)  # 通道图单独显示
    cv2.imshow("gg", g)
    cv2.imshow("rr", r)

    imgviewx[:, :, 1] = 135  # 改变单个通道（0,1,2 => B,G,R)
    cv2.imshow("chang red ", imgviewx)

    imgviewx = cv2.merge([b, g, r])  # 合并通道


# 像素运算
def pixel_operation():
    # 读入两张大小和通道相同的图片
    img1 = cv2.imread("imgx/img1.jpg")
    img2 = cv2.imread("imgx/img2.jpg")
    print(img1.shape, "=====", img2.shape)
    # 创建一个大小可调整的窗口
    cv2.namedWindow("operation", cv2.WINDOW_NORMAL)
    cv2.imshow("img111", img1)
    cv2.imshow("img222", img2)
    # 处理图片
    # 像素点相加，如0（黑色），255（白色），0+255=255（白色），超过255还是白色
    # imgoperation=cv2.add(img1,img2)
    # 像素相减，如0（黑色），255(白色），0-255=-255=0（黑色）
    # imgoperation=cv2.subtract(img1,img2)
    # 像素相乘，255(白色），0/255=0（黑色）
    # imgoperation=cv2.divide(img1,img2)
    # 像素相乘，255(白色），0*255=0（黑色）
    # imgoperation=cv2.multiply(img2,img1)
    # 像素与,二进制与，如0与255为00000000&11111111=00000000
    imgoperation = cv2.bitwise_and(img1, img2)
    # 像素或
    imgoperation = cv2.bitwise_or(img1, img2)

    # 显示处理后的图片
    cv2.imshow("operation", imgoperation)


# .......................................................................
# 视频处理，视频无声音
def vediox():
    ved = cv2.VideoCapture("imgx/vv.mp4")  # 打开视频
    while True:
        ret, tux = ved.read()
        if ret == False:  # 判断视频是否播放完毕
            break
        else:
            cv2.imshow("wideo1111", tux)  # 每帧显示
            hsv = cv2.cvtColor(tux, cv2.COLOR_BGR2HSV)  # 转换成HSV图片格式，对颜色敏感
            lowx = np.array([37, 43, 46])  # 表格在后面给出
            uppx = np.array([77, 255, 255])
            # 播放此输出的目标是白色
            tux2 = cv2.inRange(hsv, lowx, uppx)  # 利用低指和高指匹配延时，所匹配的是绿色
            # 播放此输出的目标是原色
            tux3 = cv2.bitwise_and(tux, tux, mask=tux2)

            cv2.imshow("video222", tux3)

            if 27 == cv2.waitKey(20):  # 按键退出播放
                break


# .........................................................................
# 创建一个窗口，中文显示会出乱码，第一个参数为窗口唯一标识字符串
# 窗口大小可调整，默认参数为c v2.WINDOW_AUTOSIZE 根据图像大小自动创建大小
# 可建多个
cv2.namedWindow("东小东标题", cv2.WINDOW_NORMAL)


# .........................................................................
# 创建鼠标点击事件回调函数,（事件，x轴位置，y轴位置，标记，属性）
def drawxxx(event, x, y, flags, param):
    if event == cv2.EVENT_LBUTTONDOWN:
        print("鼠标按下", x, y)
    # elif event==cv2.EVENT_MOUSEMOVE:
    # print("鼠标滑动")
    elif event == cv2.EVENT_LBUTTONUP:
        print("鼠标抬起")


# 注册鼠标监听事件(窗口，回调函数）
cv2.setMouseCallback("东小东标题", drawxxx)

# .........................................................................
t1 = cv2.getTickCount()  # 利用cpu时间......
# xgtp()#调用图片像素遍历函数
# cjtx()#调用创建图形函数
# vediox()#调用视频处理函数
# tongdao()#通道处理
# pixel_operation()#像素点的加减乘除等处理
# pictureArea()#图片区域处理
# fill_color()#泛洪填充，相似像素填充
t2 = cv2.getTickCount()
timesx = (t2 - t1) / cv2.getTickFrequency()
print("花费时间：%s 毫秒" % (timesx * 1000))


# 显示图片，参数：（窗口唯一标识字符串，imread读入的图像）
# 可以不基于窗口，可建多个
cv2.imshow("东小东标题", imgviewx)


# .........................................................................
# 将图片保存，写入到文件
cv2.imwrite("2.jpg", imgviewx)


# .........................................................................
# 窗口退出
# 窗口等待任意键盘按键输入,0为一直等待,其他数字为毫秒数
# 等待时间到则返回-1，如有键盘按键按下则返回按键的ASCII码
# 可使用print(cv2.waitKey(0))获取该按键值
keyx = cv2.waitKey(0)
print(keyx)
if keyx == 27:
    print("你按下了键盘的：ESC键")

# .........................................................................
# 销毁窗口，退出程序
cv2.destroyAllWindows()
