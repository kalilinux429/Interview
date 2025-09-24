// const sumZero = (nums) => {
//     let left = 0, right = nums.length - 1;
  
//     while(left < right) {
//       const sum = nums[left] + nums[right];
//       if(sum === 0) {
//         return [nums[left], nums[right]];
//       } else if(sum > 0) {
//         right--;
//       } else {
//         left++;
//       }
//     } 
//   }
  
//   const result = sumZero([-3, -2, -1, 0, 1, 2, 3, 10]);
//   console.log(result); // [-3, 3]


const result = [-3, -2, -1, 0, 1, 2, 3, 10];

function findSumPair(arr, target){
  let left = 0;
  let right = arr.length - 1;
  
  while(left < right){
    let sum = arr[left] + arr[right];
    
    if(sum === target){
      return [arr[left], arr[right]];
    } else if(sum > target){
      right--;
    } else {
      left++;
    }
  }
  
  return null; // No pair found
}

console.log(findSumPair(result, 5));


//find any given paier

const result = [-3, -2, -1, 0, 1, 2, 3, 10];

function findSumPair(arr, target){
  let left = 0;
  let right = arr.length - 1;
  
  while(left < right){
    let sum = arr[left] + arr[right];
    
    if(sum === target){
      return [arr[left], arr[right]];
    } else if(sum > target){
      right--;
    } else {
      left++;
    }
  }
  
  return null; // No pair found
}

console.log(findSumPair(result, 5));
