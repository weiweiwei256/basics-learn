import moduleA
import sys

print(moduleA.add(1, 2))
print(sys.path)
print(dir(moduleA))
print(dir())
if __name__ == "__main__":
    print("程序自身在运行")
else:
    print("我来自另一模块")
