class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("Node 1")
const b = new Node("Node 2")
const c = new Node("Node 3")
const d = new Node("Node 4")

a.next = b
b.next = c
c.next = d

// A => B => C => D => NULL


// Traversing Linked List 
const printTraverse = (head) => {
  let current = head; 
  // it's honestly better to write this logic for current in present tense instead of using current.next
  while (current != null) {
    console.log(current.val);
    current = current.next; 
  }
};

// Traversing Recursivly 
const printRecursive = (head) => {
  if (head === null) return;
  console.log(head.val);
  printRecursive(head.next);
};

printTraverse(a);
printRecursive(a);