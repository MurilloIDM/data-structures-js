class Stack {
  private items: Array<any>;

  constructor() {
    this.items = [];
  }
  
  push(element: any): void {
    this.items.push(element);
  }

  pop(): any {
    return this.items.pop();
  }
  
  peek(): any {
    const element = this.items[this.size() - 1];
    return element;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    const size = this.items.length;
    return size;
  }

  clear(): void {
    this.items = [];
  }
}

export default Stack;