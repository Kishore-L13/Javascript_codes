function lengthOfLongestSubstring(s) {
    // Your implementation
    let maxlen = 0;
    let charSet = new Set()
    let start = 0;
    for (let end = 0; end < s.length; end++){
        while (charSet.has(s[end])) {
            charSet.delete(s[start])
            start++
        }
        charSet.add(s[end])
        maxlen = Math.max(maxlen,end - start + 1)
    }
    return maxlen;
}

//For the purpose of user debugging.
lengthOfLongestSubstring("abcabcbb");