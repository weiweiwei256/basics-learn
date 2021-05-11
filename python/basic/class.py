class MyClass:
    name = "weiyajun"
    # inner property
    __innerArg = "__innerData"

    def __init__(self, name):
        self.name = name

    def setName(self, name):
        self.name = name

    def showName(self):
        print("my class name:" + self.name)

    def printInfo(self):
        print(self)
        print(self.__class__)


class MyParent(MyClass):
    parentProperty = "parentProperty"

    def __init__(self, parentName, childName):
        MyClass.__init__(self, childName)
        self.parentProperty = parentName

    def parentInfo(self):
        print("parent name:" + self.parentProperty + self.__childInfo())

    def __childInfo(self):
        return " child info:" + self.name


my = MyClass("default name")
my.showName()
my.setName("newName")
my.showName()
# MyClass.printInfo()
my.printInfo()

p = MyParent("parent", "child")
p.parentInfo()
# p.__childInfo()
