// Zipper List problem:

// A -> B -> C
// D-> E -> F

// A -> D -> B -> E -> C -> F

//Iterative
//Time = O(min(n,m))
// Space = O(0)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("3");
const b = new Node("4");
const c = new Node("5");
const d = new Node("6");

const e = new Node("E");
const f = new Node("F");
const g = new Node("G");
const h = new Node("H");

a.next = b;
b.next = c;
c.next = d;

e.next = f;
f.next = g;
g.next = h;

const zipper = (head1, head2) => {
  let count = 0;

  let current1 = head1.next;
  let current2 = head2;
  let current3 = head1;
  let head3 = head1;

  while (current1 != null && current2 != null) {
    if (count % 2 == 0) {
      current3.next = current2;
      current2 = current2.next;
    } else {
      current3.next = current1;
      current1 = current1.next;
    }
    current3 = current3.next;
    count++;
  }
  if (current1 != null) current3.next = current1; //adding extra nodes if the lists are unequal
  if (current2 != null) current3.next = current2;

  return head3;
};

const printLL = (head) => {
  let current = head;
  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
};

const x = zipper(a, e);
printLL(x);
