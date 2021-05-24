import json
import ast
dic = {"num": 222, "path": "/user/asdfa/a.py"}
print("dic", dic)
# dict2str
str = str(dic)
print("str", str)

newDic = ast.literal_eval(str)
print("newDic", newDic)
