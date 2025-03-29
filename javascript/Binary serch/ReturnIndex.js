//binaray serch alowasy work on sorted array

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found target, return index
        } 
        else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } 
        else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Target not found
}

// Example Usage:
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // Output: 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 4)); // Output: -1
