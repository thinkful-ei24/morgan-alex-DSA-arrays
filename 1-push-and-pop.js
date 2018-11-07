const memory = require('./memory');
const Array = require('./array');

function main() {
  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // length 5, capacity: 1024, memory address: 0

  arr.pop();
  arr.pop();
  arr.pop();
  //length: 2, ptr: 0

  // console.log(arr);
  // console.log(arr.get(0));
  arr.pop();
  arr.pop();

  arr.push('tauhida');
  console.log(arr.get(0));
  //result is NaN, our memory only allocates for 64bit floats
}
main();
