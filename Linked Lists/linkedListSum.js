class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Let's say I want to sum the values in a linked list 

const a = new Node(10);
const b = new Node(3);
const c = new Node(5);
const d = new Node(14);
const e = new Node(-3);
const f = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


// Doing it vanilla (iterative) 
// Time: O(n) 
// Space: O(1)

const sumList = (head) => {
  let sum = 0;
  let current = head; 

  while(current != null) {
    sum += current.val;
    current = current.next;
  }

  return sum;
}

// Doing it recursivly (hot)
// Time: O(n)
// Space: O(n) - because of the call stack, when we hit base case there's still like 4 calls waiting to happen

const sumListHot = (head) => {
  if (head === null) return 0; 
  return head.val + sumListHot(head.next);
}



const summy = sumList(a)
const summyrecur = sumListHot(a)
console.log(summy);
console.log(summyrecur);