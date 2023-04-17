const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const node = new Node(data);

    if (!this._root) {
      this._root = node;
      return;
    }

    let current = this._root;
    while (current) {
      if (data < current.data) {

        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  has(data) {
    let current = this._root;

    while (current) {
      if (data === current.data) {

        return true;
      } else if (data < current.data) {

        current = current.left;
      } else {

        current = current.right;
      }
    }


    return false;
  }

  find(data) {

    let current = this._root;

    while (current) {
      if (data === current.data) {

        return current;
      } else if (data < current.data) {

        current = current.left;
      } else {

        current = current.right;
      }
    }

    return null;
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      let minRightNode = node.right;
      while (minRightNode.left) {
        minRightNode = minRightNode.left;
      }

      node.data = minRightNode.data;
      node.right = this._removeNode(node.right, minRightNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else {
      node.right = this._removeNode(node.right, data);
      return node;
    }
  }

  min() {
    if (!this._root) {
      return null;
    }

    let current = this._root;
    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let current = this._root;
    while (current.right) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};