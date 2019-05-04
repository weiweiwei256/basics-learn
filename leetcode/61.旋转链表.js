/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  // 特殊判断
  if (head == null) {
    return null;
  }
  if (head.next == null) {
    return head;
  }
  // get length
  let temp = head;
  let length = 0;
  let tail = temp;
  while (temp) {
    tail = temp;
    temp = temp.next;
    length++;
  }
  // 成环
  tail.next = head;
  // get offset
  let offset = length - ( k % length) - 1;
  // console.log(length);
  // console.log(k % length);
  // console.log(offset);
  // get new tail
  newTail = head;
  for (let i = 1; i <= offset; i++) {
    newTail = newTail.next;
  }
  // console.log(newTail);
  let newHead = newTail.next;
  // 破环
  newTail.next = null;
  // console.log(newHead);
  return newHead;
};
