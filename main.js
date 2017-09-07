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

function findUnSortedNumber(array, guess) {
    if(typeof array === 'string') {
        array = array.split(' ')
    }

    for(let i = 0; i < array.length; i++) {
        if(array[i] === guess) {
            return i;
        }
    }
    return -1;
}

function binarySearch(array, value, start=0, end=array.length) {
    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item == value) {
        console.log('the value is located at index....', index);
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }

};

function findSortedNumber(array, guess, start, end=array.length) {
    if(typeof array === 'string') {
        array = array.split(' ')
    }
    array.sort(function(a, b){return a - b})
    console.log(array)
    binarySearch(array, guess, start=0, end=array.length)
    
}

const numbers = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5 76 62';
const alternateArray = [90, 28, 1, 700, 40, 23]

let bt = new BinaryTree();

let array = [];

bt.insert('3', '3');
bt.insert('4', '4');
bt.insert('5', '5');
bt.insert('6', '6');
bt.insert('0', '0');
bt.insert('1', '1');
bt.insert('2', '2');

// console.log(findUnSortedNumber(alternateArray, 23));
console.log(findSortedNumber(numbers, 93));
// console.log(depthInOrder(bt, array))
// console.log(breadthInOrder(bt, array))
