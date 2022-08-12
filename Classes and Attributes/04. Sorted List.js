class List {
  constructor() {
    this.collection = [];
    this.size = this.collection.length;
  }
  add(element) {
    this.collection.push(element);
    this.size = this.collection.length;

    this.collection.sort((a, b) => a - b);
  }

  remove(index) {
    if (index >= 0 && index < this.collection.length) {
      this.collection.splice(index, 1);
      this.size = this.collection.length;

      this.collection.sort((a, b) => a - b);
    } else {
      throw new Error("Invalid input!");
    }
  }

  get(index) {
    if (index >= 0 && index < this.collection.length) {
      return this.collection[index];
    } else {
      throw new Error("Invalid input!");
    }
  }
}

let list = new List();
list.add(15);
list.add(6);
list.add(7);
list.add(8);
list.add(10);

console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
