class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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

/**
 * Iterative solution to look through a linked list and see if a value exists in it. 
 * Time: O(n)
 * Space: O(1) 
 * 
 * @param {*} head - the head of the linked list 
 * @param {*} findMe - the item we're looking for in the linked list
 * @returns Whether or not we found the findMe value in the linked list 
 * 
 */
const findValue = (head, findMe) => {
  let current = head;
  while (current != null) {
    if (current.val === findMe) return true; 
    current = current.next;
  }
  return false; 
};


/**
 * Recursive solution to look through a linked list and see if a value exists in it. 
 * Time: O(n)
 * Space: O(n) 
 * 
 * @param {*} head - the head of the linked list 
 * @param {*} findMe - the item we're looking for in the linked list
 * @returns Whether or not we found the findMe value in the linked list 
 * 
 */
const findValueRecur = (head, findMe) => {
  if (head === null) return false; 
  if (head.val === findMe) return true;
  // this needs to be a return so the result gets passed up the call stack
  return findValueRecur(head.next, findMe);
};


/**
 * Iterative 
 * Time: O(n)
 * Space: O(1) 
 * 
 * @param {*} head - the head of the linked list 
 * @param {*} index 
 * @returns 
 * 
 */
const getNodeValue = (head, index) => {
  let current = head; 
  let flag = 0; 
  while (current != null) {
    if (flag === index) return current; 
    current = current.next; 
    flag++;  
  }
}

const getNodeValueRecur = (head, index, count) => {
  if(head === null) return false; 
  if ()
}