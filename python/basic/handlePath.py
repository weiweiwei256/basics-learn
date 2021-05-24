import sys
import os

print("sys.argv", sys.argv)
currentFilePath = sys.argv[0]
print("currentFilePath", currentFilePath)
print(__file__)
print(os.path.basename(currentFilePath))
print(os.path.splitext(currentFilePath)[0])
print(os.path.splitext(os.path.basename(currentFilePath))[0])
