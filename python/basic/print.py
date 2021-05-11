for x in range(1, 11):
    print(repr(x).rjust(2), repr(x * x).rjust(3), end=" ")
    print(repr(x * x * x).rjust(4))


print(str("aaaa").ljust(10, "b"))
print(str("aaaa").center(10, "b"))
# 数字填充
print("12".zfill(5))
print("-3.14".zfill(7))
print("3.14159265359".zfill(5))
# format
print("{0} 和 {1}".format("Google", "Runoob"))
print("{name}网址： {site}".format(name="菜鸟教程", site="www.runoob.com"))
print("站点列表 {0}, {1}, 和 {other}。".format("Google", "Runoob", other="Taobao"))
import math

print("常量 PI 的值近似为 {0:.3f}。".format(math.pi))

table = {"Google": 1, "Runoob": 2, "Taobao": 3}
for name, number in table.items():
    print("{0:10} ==> {1:10d}".format(name, number))

print(
    "Runoob: {0[Runoob]:d}; Google: {0[Google]:d}; Taobao: {0[Taobao]:d}".format(table)
)
print("Runoob: {Runoob:d}; Google: {Google:d}; Taobao: {Taobao:d}".format(**table))
