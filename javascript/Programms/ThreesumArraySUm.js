function threeSum(arr, target) {
    arr.sort((a, b) => a - b); // Sorting helps with two-pointer approach
    const result = [];  
    for (let i = 0; i < arr.length - 2; i++) {
      let left = i + 1, right = arr.length - 1;// lenth-2 take as one elment nad right is length-1
      while (left < right) {
        const sum = arr[i] + arr[left] + arr[right];
        if (sum === target) {
          result.push([arr[i], arr[left], arr[right]]);
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
    return result;
  }
  
  console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); // [[-1, -1, 2], [-1, 0, 1]]
  