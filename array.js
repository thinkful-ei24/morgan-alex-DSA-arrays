const Mem = require("./memory");
const memory = new Mem();

class Array {
  constructor() {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error("Out of memory");
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
  }
}
Array.SIZE_RATIO = 3;

(function main() {
  const arr = new Array();

  arr.push("hello");
})();
