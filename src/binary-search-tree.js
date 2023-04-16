const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {

  constructor(data) {
    this.data = data;
    this.start = null;
    this.end = null;

  }

}

class BinarySearchTree {
  constructor() {

    this.list = null;
  }

  root() {

    return this.list === null ? null : this.list;
  }

  add(data) {

    let node = new Node(data);

    if (this.list === null) {
      this.list = node;
      return this.list;
    };

    this.current = this.list;

    do {
      if (this.current.data === data) break;

      if (data < this.current.data) {
        if (this.current.start === null) {
          this.current.start = node;
          break;
          
        } else {

          this.current = this.current.start;
        }
      }

      if (this.current.data < data) {
        if (this.current.end === null) {
          this.current.end = node;
          break;
        } else {
          this.current = this.current.end;
        }
      }

    } while (true);

    return this.list;
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {

    if (this.list === null) return null;

    this.current = this.list;

    do {
      if (this.current.data === data) return this.current;

      if (data < this.current.data) {
        if (this.current.start === null) {
          return null;
        } else {
          this.current = this.current.start;
        };
      };

      if (this.current.data < data) {

        if (this.current.end === null) {

          return null;
        } else {

          this.current = this.current.end;
        }
      }

    } while (true)
  }

  minNode(node) {
    if (node.start === null)

      return node;
    else

      return this.minNode(node.start);
  }

  remove(data) {

    this.list = this.removeNode(this.list, data);
  }

  removeNode(node, data) {

    if (node === null) {
      return null;

    } else if (data < node.data) {

      node.start = this.removeNode(node.start, data);
      return node;

    } else if (data > node.data) {
      node.end = this.removeNode(node.end, data);
      return node

    } else {
      if (node.start === null && node.end === null) {
        node = null

        return node;
      }
      if (node.start === null) {

        node = node.end

        return node

      } else if (node.end === null) {
        node = node.start
        return node
      }







      let newNode = this.minNode(node.end);
      node.data = newNode.data;
      node.end = this.removeNode(node.end, newNode.data);
      return node;
    }
  }

  min() {
    if (this.list === null) return null;

    this.current = this.list;
    do {

      if (this.current.start === null) {
        return this.current.data;
      } else {
        this.current = this.current.start
      };
    } while (true);
  }


}

module.exports = {
  BinarySearchTree
};