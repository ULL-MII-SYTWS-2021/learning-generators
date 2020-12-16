// See https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js#:~:text=You%20can%20also%20use%20npm,import%20in%20your%20JavaScript%20files.

class Group {
  constructor() {
    this.list = [];
  }
  add(elt) {
    if (!this.has(elt)) this.list.push(elt);
  }
  delete(elt) {
    if (this.has(elt)) this.list.splice(this.list.indexOf(elt), 1);
  }
  has(elt) {
    return this.list.indexOf(elt) !== -1;
  }
  static from(iterable) {
    let result = new Group();
    for (const elt of iterable) {
      result.add(elt);
    }
    return result;
  }
  *[Symbol.iterator] () {
    for (let i = 0; i < this.list.length; i++) {
      yield this.list[i];
    }
  }
}

export { Group };

