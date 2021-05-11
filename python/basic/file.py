# f = open("./tmp/foo.txt", "w")

# f.write( "Python 是一个非常好的语言。\n是的，的确非常好!!\n" )

# # 关闭打开的文件
# f.close()

# 打开一个文件
f = open("./tmp/foo.txt", "r")

# str = f.readlines()
# print(str)
for line in f:
    print(line, end='')

# 关闭打开的文件
f.close()