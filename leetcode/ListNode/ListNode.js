function ListNode(val) {
  this.val = val;
  this.next = null;
}
var generateListNode = function(arr) {
  let head = new ListNode(arr[0]);
  let temp = head;
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    temp.next = new ListNode(val);
    temp = temp.next;
  }
  return head;
};
var traveseListNode = function(head) {
  let node = head;
  while (node) {
    console.log(node.val);
    node = node.next;
  }
};
let listNode = generateListNode([1, 2, 3]);
let a = listNode;
a = a.next;
listNode = a;
traveseListNode(listNode);
