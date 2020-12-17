// See https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js#:~:text=You%20can%20also%20use%20npm,import%20in%20your%20JavaScript%20files.

class Group {
  constructor() {
    this.members = [];
  }
  add(elt) {
    if (!this.has(elt)) this.members.push(elt);
  }
  delete(elt) {
    if (this.has(elt)) this.members.splice(this.members.indexOf(elt), 1);
  }
  has(elt) {
    return this.members.indexOf(elt) !== -1;
  }
  static from(iterable) {
    let result = new Group();
    for (const elt of iterable) {
      result.add(elt);
    }
    return result;
  }
  *[Symbol.iterator] () {
    for (let i = 0; i < this.members.length; i++) {
      yield this.members[i];
    }
  }
}

export { Group };

