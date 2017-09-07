'use strict';

class BinaryTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
      }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinaryTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinaryTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }  
}

function depthInOrder(tree, values=[]) {
    
    if (tree.left) {
        values = depthInOrder(tree.left, values);
    }
    values.push(tree.value);
   
    if (tree.right) {
        values = depthInOrder(tree.right, values);
    }

    return values;
}

function breadthInOrder(tree, values=[]) {
    const queue = [tree];
    console.log(queue)

    while (queue.length) {
        const node = queue.shift();
        values.push(node.value);

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }
    return values;
}

let bt = new BinaryTree();

let array = [];

bt.insert('3', '3');
bt.insert('4', '4');
bt.insert('5', '5');
bt.insert('6', '6');
bt.insert('0', '0')
bt.insert('1', '1');
bt.insert('2', '2');

// console.log(depthInOrder(bt, array))
console.log(breadthInOrder(bt, array))
