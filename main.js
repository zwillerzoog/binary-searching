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
    // console.log(array)
    binarySearch(array, guess, start=0, end=array.length)
    
}

function deweyDecimalSearch (array, guess) {
    //if sorted....do this....
    // array.sort();
    // binarySearch(array, guess, start=0, end=array.length)
    console.log(array)
    //if not sorted...linear
    for(let i = 0; i < array.length; i++) {
        if(guess === array[i].title || guess === array[i].author || guess === array[i].dewey) {
        // if(guess === ( array[i].author || array[i].dewey)) {
            console.log(`title: ${array[i].title}, author: ${array[i].author}, dewey: ${array[i].dewey}, is located at.....${i} `);
        }
    }
    return -1;


}
let numberTree = new BinaryTree();

function growTree(tree, data) {
    let i, curr;
  
    for ( i = 0; i < data.length; i++ ) {
      curr = data[i];
      tree.insert(curr);
    }
  }


function dfsPreOrder(tree){
    // console.log(tree)
    
    if (tree.left) {
        dfsPreOrder(tree.left);
    }
    if (tree.right) {
        dfsPreOrder(tree.right);
    }
}
let values = []
function dfsInOrder(tree, values){
    
    let newArray;
    if (tree.left) {
        newArray = dfsPreOrder(tree.left);
    }
    // values.push(tree.left.key);
    

    if (tree.right) {
        values.push(tree.right.key);
        newArray = dfsPreOrder(tree.right);
    }
    console.log(newArray)
    // console.log(values);
}



const numbers = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5 76 62';
const alternateNumberArray = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

const library = [
    {
      author: 'Cowlishaw, Mike',
      dewey: '005.133',
      title: 'The REXX Language'
    },
    {
      author: 'Sams',
      dewey: '005.133',
      title: 'Teach Yourself C++ In 21 Days'
    },
    {
      author: 'Stroustrup., Bjarne',
      dewey: '005.133',
      title: 'The C++ Programming Language'
    },
    {
      author: 'Crockford, Douglas',
      dewey: '005.2762',
      title: 'JavaScript: The Good Parts'
    },
    {
      author: 'Flanagan, David',
      dewey: '005.2762',
      title: 'JavaScript: The Definitive Guide'
    },
    {
      author: 'Schmidt, Meinhard',
      dewey: '005.44684',
      title: 'Windows Vista for Dummies'
    },
    {
      author: 'Zondervan',
      dewey: '220.52081',
      title: 'NIV Study Bible'
    },
    {
      author:'Humphries, Russell, Dr.',
      dewey: '231.7652',
      title: 'Starlight and Time'
    },
    {
      author: 'Jane, Frederick Thomas',
      dewey: '623.82509051',
      title: 'Jane\'s Fighting Ships'
    },
    {
      author: 'Norris, Chuck',
      dewey: '796.8092',
      title: 'The Official Chuck Norris Fact Book'
    }
  ];

let bt = new BinaryTree();

let array = [];

// bt.insert('3', '3');
// bt.insert('4', '4');
// bt.insert('5', '5');
// bt.insert('6', '6');
// bt.insert('0', '0');
// bt.insert('1', '1');
// bt.insert('2', '2');

growTree(numberTree, alternateNumberArray)
// dfsPreOrder(numberTree)
dfsInOrder(numberTree, values)
// deweyDecimalSearch(library, '005.44684')
// console.log(findUnSortedNumber(alternateArray, 23));
// console.log(findSortedNumber(numbers, 93));
// console.log(depthInOrder(bt, array))
// console.log(breadthInOrder(bt, array))
// console.log(convertStringToTree(alternateNumberString))