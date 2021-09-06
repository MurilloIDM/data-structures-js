class Queue {
  private count: number;
  private lowestCount: number;
  private items: { [key: number]: any };

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  public enqueue(element: any): void {
    this.items[this.count] = element;
    this.count++;
  }

  public dequeue(): null | any {
    if (this.isEmpty()) {
      return null;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return result;
  }

  public peek(): any {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.lowestCount];
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public size(): number {
    return this.count - this.lowestCount;
  }

  public clear(): void {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  public toString(): string {
    if (this.isEmpty()) {
      return "";
    }

    let objectString = `${this.items[this.lowestCount]}`;
    
    for (let x = this.lowestCount + 1; x < this.count; x++) {
      objectString = `${objectString},${this.items[x]}`;
    }

    return objectString;
  }
}

export default Queue;