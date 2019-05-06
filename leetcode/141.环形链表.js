/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false;
  }
  let node = head;
  while (node) {
    if (node.find) {
      return true;
    }
    node.find = true;
    node = node.next;
  }
  return false;
};
