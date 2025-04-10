const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    let s1 = s.split("").sort().join("");
    let t1 = t.split("").sort().join("");
    return s1 === t1;
  };
  
  const isAnagram1 = (s, t) => {
    if (s.length !== t.length) return false;
    let s1 = {};
    let t1 = {};
    for (let i = 0; i < s.length; i++) {
      s1[s[i]] = (s1[s[i]] || 0) + 1;
      t1[t[i]] = (t1[t[i]] || 0) + 1;
    }
    for (let key in s1) {
      if (s1[key] !== t1[key]) return false;
    }
    return true;
  };
  
  console.log(isAnagram("anagram", "nagaram")); // true
  
  const isAnagramOptimised = (s, t) => {
    if (s.length !== t.length) return false;
  
    const charCount = {};
  
    // Count the frequency of characters in the first string
    for (let i = 0; i < s.length; i++) {
      charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    }
  
    // Decrease the frequency of characters based on the second string
    for (let i = 0; i < t.length; i++) {
      if (!charCount[t[i]]) return false; // If a character is not found or count is 0, not an anagram
      charCount[t[i]]--;
    }
  
    // If all counts are zero, the strings are anagrams
    return true;
  };
  
  console.log(isAnagram("anagram", "nagaram")); // true
  console.log(isAnagram("rat", "car")); // false