class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("bb");
const c = new Node("ccc");
const d = new Node("dddd");

a.next = b;
b.next = c;
c.next = d;

const reverseRecursion = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseRecursion(next, head);
};

const reverse = (head) => {
  let current = head;
  let prev = null;
  while (current != null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const printLL = (head) => {
  let current = head;
  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
};

printLL(a);

let x = reverse(a);
printLL(x);

let y = reverseRecursion(a);
console.log("Y");
printLL(a);

