function TestData(number){
this.number= number;
}
function Node(data) {
    this.data = data;
    this.right = null;
    this.left = null;
}
function BinarySearchTree(comparator) {
    this.root = null;
    this.result = null;
    BinarySearchTree.prototype.compare=comparator;
}

BinarySearchTree.prototype.push = function (data, root) {
    if (this.root == null) {
        this.root = new Node(data);
        this.result = this.root;
    }
    else {
        if (this.compare(root.data,data)>0) {
            if (root.right != null) this.push(data, root.right);
            else {
                root.right = new Node(data);
                this.result = root.right;
            }
        } else if (this.compare(root.data,data)<0) {

            if (root.left != null) this.push(data, root.left);
            else  {
                root.left = new Node(data);
                this.result = root.left;
            }
        } else if(this.compare(root.data,data)==0){
            this.result = root;
        }
    }
    return "erro";
}

