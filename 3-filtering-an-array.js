const filter = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(filter([1, 2, 3, 4], num => num > 2)); //  [3, 4]
//input array
//return array all numbers greater than 5
