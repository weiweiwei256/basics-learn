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

var mergeTwoLists = function(l1, l2) {
  var head = new ListNode();
  var temp = head;
  var result = null;
  while (l1 != null || l2 != null) {
    if (l1 == null) {
      result = l2.val;
      l2 = l2.next;
    } else if (l2 == null) {
      result = l1.val;
      l1 = l1.next;
    } else if (l1.val <= l2.val) {
      result = l1.val;
      l1 = l1.next;
    } else if (l1.val > l2.val) {
      result = l2.val;
      l2 = l2.next;
    }
    temp.next = new ListNode(result);
    temp = temp.next;
  }

  return head.next;
};
