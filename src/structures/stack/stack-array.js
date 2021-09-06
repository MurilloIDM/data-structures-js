class Stack {
  constructor() {
    this.items = [];
  }

  size() {
    const size = this.items.length;
    return size;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    const element = this.items[this.size() - 1];
    return element;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = [];
  }
}

module.exports = Stack;