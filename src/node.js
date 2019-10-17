class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(this.left === null){
			node.parent = this;
			this.left = node;
		} else if (this.right === null) {
			node.parent = this;
			this.right = node;
		} else {
			return this;
		}
	}

	removeChild(node) {
		if(node.parent === null) throw "Error2";
		const compare = (elem) => {
			if(!!elem && elem.data === node.data && elem.priority === node.priority){
				return null;
			}
			return elem;
		};
		[this.left,this.right] = [...[this.left,this.right].map(elem => compare(elem))];
		node.parent = null;
		return this;
	}

	remove() {
		if(this.parent === null) return this;
		this.parent.removeChild(this);
	}

	swapWithParent() {
		if (this.parent) {
			if (this.left) this.left.parent = this.parent;
			if (this.right) this.right.parent = this.parent;

			if (this === this.parent.left) {
				if (this.parent.right) this.parent.right.parent = this;
				[this.parent.left, this.parent.right, this.left, this.right] = [this.left, this.right, this.parent, this.parent.right];
			}

			if (this === this.parent.right) {
				if (this.parent.left) this.parent.left.parent = this;
				[this.parent.left, this.parent.right, this.left, this.right] = [this.left, this.right, this.parent.left, this.parent];
			}

			if (this.parent.parent) {
				if (this.parent === this.parent.parent.left) {
					this.parent.parent.left = this;
				}
				if (this.parent === this.parent.parent.right) {
					this.parent.parent.right = this;
				}
			}
			[this.parent.parent, this.parent] = [this, this.parent.parent];
		}
	}
}

module.exports = Node;
