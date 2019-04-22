/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (53.98%)
 * Total Accepted:    62K
 * Total Submissions: 114.9K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var result = new ListNode();
  var next = result.next;
  var smallNodeVal;
  while ((smallNodeVal = getSmallerNode(l1, l2))) {
    if (smallNodeVal == null) {
      return result;
    }
    next = new ListNode(smallNodeVal);
    next = next.next;
  }
};
var getSmallerNode = function(node1, node2) {
  console.log(node1);
  console.log(node2);
  var resultNode = null;
  if (node1 == null && node2 == null) {
    return null;
  } else if (node1 == null) {
    resultNode = node1;
  } else if (node2 == null) {
    resultNode = node2;
  } else if (node1.val <= node2.val) {
    resultNode = node1;
  } else {
    resultNode = node2;
  }
  // 更新偏移
  let value = null;
  if (resultNode) {
    value = resultNode.val;
    resultNode = resultNode.next;
  }
  return value;
};
