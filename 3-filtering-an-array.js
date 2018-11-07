// Returning a new array
const filter = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};
// console.log(filter([2, 7, 5, 3, 7], num => num >= 5)); //  [7, 5, 7]

// Returning the same array
const filterRedux = (arr, callback) => {
  function removeItem(arr, i) {
    for (i; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    // remove the hanging item at the end of the array
    arr.pop();
  }

  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      removeItem(arr, i);
    }
  }

  return arr;
};

console.log(filterRedux([2, 7, 5, 3, 7], num => num >= 5)); //  [7, 5, 7]
