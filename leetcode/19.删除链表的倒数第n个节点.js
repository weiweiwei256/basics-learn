/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let arr = [head];
  let temp = head;
  while (temp.next) {
    temp = temp.next;
    arr.push(temp);
  }
  // //console.log(arr.length);
  // //console.error('-------------------------------------------------------------');
  //console.log(arr.length);
  //console.log(arr.length-n);
  if (arr.length == n) {
    if (arr.length == 1) {
      return null;
    } else {
      return arr[1];
    }
  }
  let node = arr[arr.length - n - 1];
  // console.log(node);
  if (node.next != null) {
    node.next = node.next.next;
  } else {
    node.next = null;
  }
  //console.log(head);
  return head;
};
