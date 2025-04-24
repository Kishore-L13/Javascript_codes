// Given an array of strings, group the anagrams together. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// LeetCode: https://leetcode.com/problems/group-anagrams/description/?envType=problem-list-v2&envId=array
// leetCode: 49. Group Anagrams

const groupAnagram = strs => {
    let result = {};
    for (let str of strs) {
      let key = str.split("").sort().join("");
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(str);
    }
    return Object.values(result);
  };
  
  console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["eat","tea","ate"],["tan"],["bat"]]