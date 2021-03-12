
var Tree = function(value) {
    this.value = value;
    this.children = [];
  };
  
  Tree.prototype.addChild = function(value) {
    var child = new Tree(value);
    this.children.push(child);
    return child;
  }
  
  // instantiate the tree
  var root1 = new Tree(1);
  var branch2 = root1.addChild(2);
  var branch3 = root1.addChild(3);
  var leaf4 = branch2.addChild(4);
  var leaf5 = branch2.addChild(5);
  var leaf6 = branch3.addChild(6);
  var leaf7 = branch3.addChild(7)
Tree.prototype.map = function(cb) {
    // create a copy of the original tree the key word 'this' refers to (not just a reference - a copy)
    var newTree = JSON.parse(JSON.stringify(this));
    // create a helper function to recurse through
    var traverse = function(cb, node) {
      node.value = cb(node.value);
      for (var i = 0; i < node.children.length; i++) {
        traverse(cb, node.children[i]);
      }
    }
    // invoke helperfunction with callback and the copy tree to update values on
    traverse(cb, newTree);
    return newTree;
  }
  