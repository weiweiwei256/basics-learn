# if expression :
#    suite
# elif expression :
#    suite
# else :
#    suite
#!/usr/bin/python3

x = "a"
y = "b"
# 换行输出
print(x)
print(y)

print('---------')
# 不换行输出
print(x, end="sdfasdf ")
print(y, end=" ssss")
print()

for letter in 'Runoob':
    print('当前字母 :', letter)
    if letter == 'o':
        pass
        print('执行 pass 块')

print("Good bye!")
for i in range(5, 9):
    print(i)
var = 1
while var == 1:  # 表达式永远为 true
    num = int(input("输入一个数字  :"))
    print("你输入的数字是: ", num)

print("Good bye!")

sites = ["Baidu", "Google", "Runoob", "Taobao"]
for index, site in enumerate(sites):
    print(index)
    print(site)
    if site == "Runoob":
        print("菜鸟教程!")
        break
    print("循环数据 " + site)
else:
    print("没有循环数据!")
print("完成循环!")

#!/usr/bin/python3

age = int(input("请输入你家狗狗的年龄: "))
print("")
if age <= 0:
    print("你是在逗我吧!")
elif age == 1:
    print("相当于 14 岁的人。")
elif age == 2:
    print("相当于 22 岁的人。")
elif age > 2:
    human = 22 + (age - 2) * 5
    print("对应人类年龄: ", human)

### 退出提示
input("点击 enter 键退出")