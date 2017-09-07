'use strict';

console.log('heyo')

class BinaryTree {
    // constructor(key, value) {
    //     this.value = value;
    //     this.left = null;
    //     this.right = null;
    // }

    //why did this constructor work and not the provided?
    //first children were being deleted
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
        // console.log(parent)
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

    
    bfs(values=[]) {
        const queue = [this];

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
}
//create tree first

function dfsInOrder(tree, values=[]) {
    
    if (tree.left) {
        
        // console.log('tree.left', tree.left)
        values = dfsInOrder(tree.left, values);
        
    }
    // console.log('value: ', tree.value)
    values.push(tree.value);
   
    if (tree.right) {
        // console.log('tree.right', tree.right.value)
        values = dfsInOrder(tree.right, values);
    }
    // console.log('values', values)

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

console.log(dfsInOrder(bt, array))
// console.log(bt.bfs());
