// 1. Go through a simple example with no algorithm per se

// arr[1, -2, 2]
// 1
// 1, -2
// 1, -2, 2
// -2, 2
// -2
// 2

// 2. Come up with an algorithm to explain your naive solution

// keep runningTotal of max
// while follower is not null
// first element
// follower at first element, leader at follower + 1
// while leader is not null, move leader forward +1
//    add leader current value to runningTotal

// if runningTotal > max, max = runningTotal
// move follower forward +1
// leader = follower + 1

// 3. Try and come up with code to fit your "English" algorithm
function maxSum(arr) {
  let max = arr[0];
  let follower = 0;
  let leader;
  let runningTotal;
  while (arr[follower] !== undefined) {
    runningTotal = arr[follower];
    // console.log(runningTotal);
    if (runningTotal > max) max = runningTotal;
    leader = follower + 1;

    while (arr[leader] !== undefined) {
      runningTotal += arr[leader];
      if (runningTotal > max) max = runningTotal;
      leader++;
    }

    follower++;
  }
  return max;
}

// console.log(maxSum([1, -2, 2])); // 2
console.log(maxSum([0, 0, -3, 5, -2, 1])); // 12
