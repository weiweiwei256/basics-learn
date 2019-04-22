/*
 * @lc app=leetcode.cn id=14 lang=iavascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.80%)
 * Total Accepted:    71.4K
 * Total Submissions: 217.4K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let shortestLength = Number.MAX_VALUE;
  let smallStr = "";

  // 获取最短字符中
  for (let i = 0; i < strs.length; i++) {
    if (shortestLength > strs[i].length) {
      shortestLength = strs[i].length;
      smallStr = strs[i];
    }
  }
  for (let i = 0; i < strs.length; i++) {
    smallStr = checkSamePrefix(smallStr, strs[i]);
  }
  return smallStr;
};
var checkSamePrefix = function(smallStr, longStr) {
  if (smallStr == "") return "";
  let i = 0;
  while (i <= smallStr.length) {
    if (longStr.startsWith(smallStr.slice(0, i))) {
      i++;
    } else {
      break;
    }
  }
  return smallStr.slice(0,  i - 1);
};
