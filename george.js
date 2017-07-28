// tree?

function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
    
}

var tree = new Tree('one');
 
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];
 
/*
 
creates this tree
 
 one
 ├── two
 │   ├── five
 │   └── six
 ├── three
 └── four
     └── seven
 
*/


// Depth-first search (DFS) is an algorithm for traversing or 
// searching tree or graph data structures. 
// One starts at the root (selecting some arbitrary node 
// as the root in the case of a graph) and explores as far
// as possible along each branch before backtracking.
Tree.prototype.traverseDF = function(callback) {
    // this is a recurse and immediately-invoking function 
    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }
        // step 4
        callback(currentNode);    
    })
    // step 1    
    (this._root);
};

// Breadth-first search (BFS) is an algorithm for traversing or 
// searching tree or graph data structures. It starts at the tree root 
// (or some arbitrary node of a graph, sometimes referred to as a 'search key') 
// and explores the neighbor nodes first, before moving to the next level neighbors.
Tree.prototype.traverseBF = function(callback) {
    var queue = []; 
    queue.push(this._root);
    currentTree = queue.shift();
    while(currentTree){
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.push(currentTree.children[i]);
        }
        callback(currentTree);
        currentTree = queue.shift();
    }
};

// Contains method
Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };
 
    this.contains(callback, traversal);
 
    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};

Tree.prototype.remove = function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;
 
    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
 
    this.contains(callback, traversal);
 
    if (parent) {
        index = findIndex(parent.children, data);
 
        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }
 
    return childToRemove;
};

tree.traverseBF(function(node) {
    console.log(node.data);
})

// tree is an example of a root node
tree.contains(function(node){
    if (node.data === 'four') {
        console.log(node);
    }
}, tree.traverseBF);


