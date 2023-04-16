const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(elV) {
    this.start = elV ? new ListNode(elV) : null;
    this.end = this.start;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(elV) {
    let newNode = new ListNode(elV);
    if (this.start === null) {
      this.start = newNode;
      this.end = this.start;

      return;
    }
    this.end.next = newNode;
    this.end = newNode;
  }

  dequeue() {
    let nodeOne = this.start;
    this.start = this.start.next;
    return nodeOne.elV;
  }
}

module.exports = {
  Queue
};
