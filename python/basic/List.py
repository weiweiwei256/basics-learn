#!/usr/bin/python3

'''
	cmp(list1, list2)
比较两个列表的元素
2	len(list)
列表元素个数
3	max(list)
返回列表元素最大值
4	min(list)
返回列表元素最小值
5	list(seq)
将元组转换为列表

list.append(obj)
在列表末尾添加新的对象
2	list.count(obj)
统计某个元素在列表中出现的次数
3	list.extend(seq)
在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）
4	list.index(obj)
从列表中找出某个值第一个匹配项的索引位置
5	list.insert(index, obj)
将对象插入列表
6	list.pop([index=-1])
移除列表中的一个元素（默认最后一个元素），并且返回该元素的值
7	list.remove(obj)
移除列表中某个值的第一个匹配项
8	list.reverse()
反向列表中元素
9	list.sort(cmp=None, key=None, reverse=False)
对原列表进行排序
'''
list = ["abcd", 786, 2.23, "runoob", 70.2]
print(list.pop())
print(list)
tinylist = [123, "runoob"]

print(list)  # 输出完整列表
print(list[0])  # 输出列表第一个元素
print(list[1:3])  # 从第二个开始输出到第三个元素
print(list[2:])  # 输出从第三个元素开始的所有元素
print(tinylist * 2)  # 输出两次列表
print(list + tinylist)  # 连接列表


def reverseWords(input):

    # 通过空格将字符串分隔符，把各个单词分隔为列表
    inputWords = input.split(" ")

    # 翻转字符串
    # 假设列表 list = [1,2,3,4],
    # list[0]=1, list[1]=2 ，而 -1 表示最后一个元素 list[-1]=4 ( 与 list[3]=4 一样)
    # inputWords[-1::-1] 有三个参数
    # 第一个参数 -1 表示最后一个元素
    # 第二个参数为空，表示移动到列表末尾
    # 第三个参数为步长，-1 表示逆向
    inputWords = inputWords[-1::-1]

    # 重新组合字符串
    output = " ".join(inputWords)

    return output


if __name__ == "__main__":
    input = "I like runoob"
    rw = reverseWords(input)
    print(rw)
#!/usr/bin/env python
# -*- coding: utf-8 -*-
    list = ['html', 'js', 'css', 'python']

    # 方法1
    print '遍历列表方法1：'
    for i in list:
        print ("序号：%s   值：%s" % (list.index(i) + 1, i))

    print '\n遍历列表方法2：'
    # 方法2
    for i in range(len(list)):
        print ("序号：%s   值：%s" % (i + 1, list[i]))

    # 方法3
    print '\n遍历列表方法3：'
    for i, val in enumerate(list):
        print ("序号：%s   值：%s" % (i + 1, val))

    # 方法3
    print '\n遍历列表方法3 （设置遍历开始初始位置，只改变了起始序号）：'
    for i, val in enumerate(list, 2):
        print ("序号：%s   值：%s" % (i + 1, val))



