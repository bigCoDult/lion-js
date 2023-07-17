let first = document.querySelector('.first');

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== document.ELEMENT_NODE);

// console.log(first)

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
}

let second = next(first);

console.log(second);




function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

let prev1 = prev(second);

console.log(prev1);
