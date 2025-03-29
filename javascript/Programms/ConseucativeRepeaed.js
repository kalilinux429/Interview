//this program is for only consecative elements
const array1=[1,1,3,4,5,6,7,7,7,8,9,9,1,1,1];
//number

function consucative(arr,n){
  let count=0;
for(let item of array1){
  if(item === n){
    count++;
  }else if(count>0){
    break;
  }
}
return count;
}

console.log(consucative(array1,7))

//for total count of each element
const arr = [1, 1, 3, 4, 5, 6, 7, 7, 7, 8, 9, 9, 1, 1, 1];

function countOccurrences(arr, num) {
  let count = 0;

  for (let item of arr) {
    if (item === num) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences(array, 1)); // Count of 1
console.log(countOccurrences(array, 7)); // Count of 7



//this program is for repeated(consecative maxcount) maxCoaunt
const array = [1, 1, 3, 4, 5, 6, 7, 7, 7, 8, 9, 9, 1, 1, 1];

function maxConsecutiveCount(arr, n) {
  let maxCount = 0;
  let currentCount = 0;

  for (let item of arr) {
    if (item === n) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0; // reset count when encountering a different number
    }
  }

  return maxCount;
}

console.log(maxConsecutiveCount(array, 7)); // Output: 3


//prgram for taking all element in singl obj frquecy counter
const data=[2,3,4,5,6,7,89,4,4,8,];
let count={};
for(let val of data){
  count[val]=(count[val] ||0)+1
}
console.log(count)
//max numbeer in frquenxy counter

