function reverseList(head) {
    let prev = null;
    let current = head;
  
    while (current !== null) {
      let nextNode = current.next; // Store next
      current.next = prev;         // Reverse current node's pointer
      prev = current;              // Move prev forward
      current = nextNode;          // Move current forward
    }
  
    return prev;
  }
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  // Create: 1 -> 2 -> 3 -> null
  const a = new ListNode(1);
  const b = new ListNode(2);
  const c = new ListNode(3);
  a.next = b;
  b.next = c;
  
  // Reverse
  const newHead = reverseList(a);
  
  // Print reversed list: 3 -> 2 -> 1
  let node = newHead;
  while (node !== null) {
    console.log(node.val);
    node = node.next;
  }
  