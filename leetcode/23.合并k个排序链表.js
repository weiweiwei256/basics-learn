/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let arr = [];
  for (let i = 0; i < lists.length; i++) {
    let linkNode = lists[i];
    while (linkNode) {
      arr.push(linkNode.val);
      linkNode = linkNode.next;
    }
  }
  arr.sort((a, b) => {
    return a - b;
  });
  if (arr.length == 0) {
    return null;
  }
  let newLinkNode = new ListNode(arr[0]);
  let temp = newLinkNode;
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    temp.next = new ListNode(val);
    temp = temp.next;
  }
  // console.log(newLinkNode);
  return newLinkNode;
};
