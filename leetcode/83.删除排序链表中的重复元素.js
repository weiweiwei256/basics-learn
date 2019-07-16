/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    if(!head){
      return null;
    }
    let temp = head
    while(temp.next){
      if(temp.val===temp.next.val){
        temp.next = temp.next.next;
      }else{
        temp = temp.next;
      }
    }
    return head;
};

