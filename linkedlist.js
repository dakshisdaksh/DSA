class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("cc");
// const d = new Node("ddd");

const a = new Node("3");
const b = new Node("4");
const c = new Node("5");
const d = new Node("6");


a.next = b;
b.next = c;
c.next = d;

const printLL = (head) => {
  let current = head;
  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
};
//sum of numbers of ll
let add = 0;
const sum = (head) => {
	let current = head;
	while(current!= null){
	add = add + current.val;
	current = current.next;
	}
}

printLL(a);
sum(a);
console.log("add is " + add);

const printLinkedList = (head) => {
  if (head == null) return;
  console.log(head.val + "\n");
  printLinkedList(head.next);
};
