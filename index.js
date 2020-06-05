// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers
// representing the color of each sock, determine how many pairs of socks with matching colors there are.

// FUNCTION DESCRIPTION

// It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

//     n: the number of socks in the pile
//     ar: the colors of each sock

// Return the total number of matching pairs of socks that John can sell.

// SAMPLE INPUT
// 9
// 10 20 20 10 10 30 50 10 20

// SAMPLE OUTPUT
// 3

// TEST VARIABLES
// let n = 10;
// let arr = [1,1,3,1,2,1,3,3,3,3]
let n = 9;
let arr = [10,20,20,10,10,30,50,10,20];

function sockMerchant(n, ar) {
  if(n !== ar.length) {
    return false;
  }

  let newAr = ar.reduce(function(acc,curr){if(typeof acc[curr] == 'undefined') { acc[curr] = 1} else {acc[curr] += 1} return acc;},{})
  let num = 0;

  for(let i in newAr) {
    if(Math.floor(newAr[i] / 2) !== 0) {
      num = num + Math.floor(newAr[i] / 2);
    }
  }
    console.log(num);
}

sockMerchant(n,arr)
