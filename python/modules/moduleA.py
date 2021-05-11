__all__ = ["add"]
moduleALocalArg = "afdasdfasdfasdfasdf"
print(moduleALocalArg)

if __name__ == "__main__":
    print("程序自身在运行")
else:
    print("我来自另一模块")


def add(a, b):
    return a + b


