const { ListNode } = require('../extensions/list-node.js');

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
  constructor(value) {
    this.start = value ? new ListNode(value) : null;
    this.end = this.start;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
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
    return nodeOne.value;
  }
}

module.exports = {
  Queue
};
