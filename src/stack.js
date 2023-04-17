const { NotImplementedError } = require('../extensions/index.js');

class Stack {

  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop(this.data.length - 1);
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}



module.exports = {
  Stack
};
