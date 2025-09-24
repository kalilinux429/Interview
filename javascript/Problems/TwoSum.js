function twoSum(nums, target) {
    const map = new Map();
    let i = 0;

    while (i < nums.length) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
        i++;
    }

    return []; // No solution found
}

// Example:
const nums = [11, 2, 7, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [1, 2]
