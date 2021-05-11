from collections import deque

queue = deque(["Eric", "John", "Michael"])
queue.append("Terry")  # Terry arrives
print(queue)
print(queue.popleft())
print(queue)
