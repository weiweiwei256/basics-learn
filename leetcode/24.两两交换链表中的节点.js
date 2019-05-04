/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) {
    return null;
  } else if (!head.next) {
    return head;
  }
  let result = head.next;
  let indexNode = head;
  
  let fNode = indexNode;
  let nNode = indexNode.next;
  while (indexNode.next != null) {
    // 交换
    fNode.next = nNode.next;
    nNode.next = fNode;
    // 移动
    indexNode = indexNode.next;// 利用结果向后移动2个
    if (indexNode == null || indexNode.next == null) {
      break;
    }
  }
  // console.log(result);
  return result;
};
