/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let result = null;
  let nIndex = null;
  let newHead = new ListNode();
  newHead.next = head;
  let nTemp = newHead;
  while (nTemp.next) {
    let n = nTemp.next;
    if (n.next != null) {
      let nn = n.next;
      //console.log(nTemp.val);
      //console.log(n.val);
      //console.log(nn.val);
      if (nTemp.val != n.val && n.val != nn.val) {
        if (!result) {
          result = n;
          nIndex = result;
        } else {
          nIndex.next = n;
          nIndex = nIndex.next;
        }
        //console.log("add node" + n.val);
      }
    } else {
      if (nTemp.val != n.val) {
        if (!result) {
          result = n;
        } else {
          nIndex.next = n;
          nIndex = nIndex.next;
        }
      } else {
        if (!result) {
          result = null;
        } else {
          nIndex.next = null;
        }
      }
    }
    nTemp = nTemp.next;
  }
  return result;
};
//[1,1,2,2]
