import sys

sys.path.append("/Users/weiyajun/work/myProject/basics-learn/python/modules")
print(sys.path)
import modules

detail = modules.__dict__.items()
print(detail)
# print(dir(modules))


# print(modules)
# demo = DemoPlugin()()
