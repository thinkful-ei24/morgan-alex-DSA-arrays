const memory = require("./memory");
const Array = require("./array");

function main() {
  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  arr.push(5);
  // length 1, capacity: 3, memory address: 0

  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // length 5, capacity: 12, memory address: 3

  arr.pop();
  arr.pop();
  arr.pop();
  // length 2, capacity: 12, memory address: 3

  arr.pop();
  arr.pop();
  // length 0, capacity: 12, memory address: 3

  arr.push("tauhida");
  // length 1, capacity: 12, memory address: 3
  //result is NaN, our memory only allocates for 64bit floats. This is a typed arr.
}
main();
