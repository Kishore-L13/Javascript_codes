function hasCycle(head) {
    let slow = head;
    let fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        return true; // Cycle detected
      }
    }
  
    return false; // No cycle
  }
  // ListNode definition
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  // Create nodes
  const a = new ListNode(1);
  const b = new ListNode(2);
  const c = new ListNode(3);
  const d = new ListNode(4);
  // Link nodes
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = b; // 🔁 Creates a cycle
  
  console.log(hasCycle(c));