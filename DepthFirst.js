// Depth-first search (DFS) is an algorithm for traversing 
// or searching tree or graph data structures. 
// One starts at the root (selecting some arbitrary node 
// as the root in the case of a graph) and explores as 
// far as possible along each branch before backtracking.

function Node(info){
    this.info = info
    this.left = null;
    this.right = null;
}

Node.prototype.toString = function() {
    return this.info;
}  

function DFT(node, data) {
    node.level = 1;
    var stack = [node];
    var tree = [];
    var current_level = node.level;
    while(stack.length > 0) {
        current_node = stack.pop();
        if (current_node.info === data) {
            console.log(tree);
            return current_node;
        }
 
        tree.push(current_node + " ");
        
        if(current_node.left) {
            current_node.left.level = current_level +1; 
            stack.push(current_node.left); 
        }  
        if(current_node.right) {
            current_node.right.level = current_level + 1; 
            stack.push(current_node.right); 
        }                  
    }
    return tree.join(" ") 
}

var root = new Node(9);
    root.left = new Node(8);    
    root.right = new Node(7);

    root.left.left = new Node(2);
    root.left.right = new Node(4);

    root.right.left = new Node(6);
    root.right.right = new Node(8);

    root.left.left.left = new Node('a');
    root.left.left.right = new Node('b');
    root.left.right.right = new Node('c');


/*
       9
    8      7
  2   4  6   8
a   b   c 

*/

console.log(DFT(root, 4));