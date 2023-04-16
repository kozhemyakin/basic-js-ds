const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
    this.curr = null;
  }

  push(element) {
    this.arr.push(element)
  }

  pop() {
    this.curr = this.arr.slice(-1)[0]
    this.arr = this.arr.slice(0, -1)
    return this.curr;
  }

  peek() {
    return this.arr[this.arr.length - 1]
  }
}

module.exports = {
  Stack
};
