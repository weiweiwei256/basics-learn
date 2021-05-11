#!/usr/bin/python3

counter = 100  # 整型变量
miles = 1000.0  # 浮点型变量
name = "runoob"  # 字符串

# Python3 中有六个标准的数据类型：

# Number（数字） True False
# String（字符串）
# List（列表）
# Tuple（元组）
# Set（集合）
# Dictionary（字典）
print(counter)
print(miles)
print(name)
# type()不会认为子类是一种父类类型。
# isinstance()会认为子类是一种父类类型。
print(type(counter))
print(type(miles))
print(type(name))
print(isinstance(name, str))

# a = b = c = 1
a, b, c = 1, 2, "runoob"
print(a)
print(b)
print(c)
