const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');


function removeKFromList(l, k) {


  let current = l;
  let prev = null;

  while (current !== null) {

    if (current.value === k) {
      if (prev === null) {
        l = current.next;
      } else {
        prev.next = current.next;
      }
    } else {
      prev = current;
    }

    current = current.next;
  }

  return l;


}

module.exports = {
  removeKFromList
};
