import sys
import getopt

argv = sys.argv[1:]
print(argv)
try:
    opts, args = getopt.getopt(argv, "hi:o:", ["ifile=", "ofile="])
    print("opts", opts)
except getopt.GetoptError:
    print("test.py -i <inputfile> -o <outputfile>")
    sys.exit(2)
for opt, arg in opts:
    if opt == "-h":
        print("test.py -i <inputfile> -o <outputfile>")
        sys.exit()
    elif opt in ("-i", "--ifile"):
        inputfile = arg
    elif opt in ("-o", "--ofile"):
        outputfile = arg

print("输入的文件为：", inputfile)
print("输出的文件为：", outputfile)
