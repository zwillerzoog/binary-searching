'use strict';

console.log('heyo')

class BinaryTree {
    // constructor(key, value) {
    //     this.value = value;
    //     this.left = null;
    //     this.right = null;
    // }

    //why did this constructor work and not the provided?
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

    dfs(values=[]) {
        
        if (this.left) {
            
            console.log('this.left', this.left.value)
            values = this.left.dfs(values);
            
        }
        console.log('value: ', this.value)
        values.push(this.value);
       
        if (this.right) {
            console.log('this.right', this.right.value)
            values = this.right.dfs(values);
        }
        // console.log('values', values)
        return values;
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

let bt = new BinaryTree;


bt.insert('3', '3');
bt.insert('4', '4');
bt.insert('5', '5');
bt.insert('6', '6');
bt.insert('0', '0')
bt.insert('1', '1');
bt.insert('2', '2');

console.log(bt.bfs());