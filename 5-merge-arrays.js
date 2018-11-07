/*
input: [1, 5, 7, 7] and [ 2, 4, 8 ]
output: [1,2,4,5,7,8]

// keep track of current index for both arrays
// if current index is less than array length - 1
// compare  element at that index for  both arrays
// push smallest element into new array 
// increment index from array that sent smaller value 
// compare the next element if its smaller
// push element into new array 
// increment respective array index 
*/

function merge(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  let result = [];
  while (arr1[index1] !== undefined || arr2[index2] !== undefined) {
    if (arr1[index1] >= arr2[index2] || !arr1[index1]) {
      result.push(arr2[index2]);
      index2++;
    } else {
      result.push(arr1[index1]);
      index1++;
    }
  }
  return result;
}

console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
