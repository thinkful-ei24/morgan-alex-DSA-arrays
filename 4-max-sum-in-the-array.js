//input [4,6,-3,5,-2,1]
// expected output 12

function maxSum(arr) {
  for (let i = 0; i < arr.length; i++) {}

  return largestSum;
}

// arr[1, -2, 2]
// 1
// 1, -2
// 1, -2, 2
// -2, 2
// 2

/*
maxSum(arr){
  max = null 
  follower = [0]

  while (array[follower]) {
    running total = arr[follower] 
    leader equal to follower + 1 
    
    while( array[leader])
      





  }



  return max
*/

// keep running total of max
// while follower is not null
// first element
// follower at first element, leader at follower + 1
// while leader is not null, move leader forward +1
//    add leader current value to running total

// if running total > max, max = running total
// move follower forward +1
// leader = follower + 1
