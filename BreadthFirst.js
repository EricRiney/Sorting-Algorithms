// Breadth First Search (BFS) algorithm traverses a 
// graph in a breadthward motion and uses a queue to 
// remember to get the next vertex to start a search, 
// when a dead end occurs in any iteration.

function Node(info){
    this.info = info
    this.left = null;
    this.right = null;
    this.level = null; 
}

Node.prototype.toString = function() {
    return this.info;
}  

function BFT(node, data) {
    node.level = 1;
    var queue = [node];
    var tree = [];
    var current_level = node.level;
    while(queue.length > 0) {
        current_node = queue.shift();
        if (current_node.info === data) {
            return current_node;
        }
        tree.push(current_node + " ");
        
        if(current_node.left) {
            current_node.left.level = current_level +1; 
            queue.push(current_node.left); 
        }  
        if(current_node.right) {
            current_node.right.level = current_level + 1; 
            queue.push(current_node.right); 
        }                  
    }
    return tree.join(" ") 
}

/*
       9
    8      7
  2   4  6   8
a   b   c 
 */
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

console.log(BFT(root, 90));
