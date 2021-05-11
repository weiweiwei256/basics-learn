import sys
import os

print(sys.argv[1])
print(sys)
print(os)
if True:
    a = 3
    print(a)

print(a)


def add(a, b):
    return a + b


print(add.__name__)
