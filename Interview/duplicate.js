function removeDuplicates(arr) {
    const seen = {};
    const result = [];
  
    for (let item of arr) {
      if (!seen[item]) {
        seen[item] = true;
        result.push(item);
      }
    }
  
    return result;
  }
  