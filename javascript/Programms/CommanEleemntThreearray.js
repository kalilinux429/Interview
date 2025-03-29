function findCommonElements(arr1, arr2, arr3) {
    let i = 0, j = 0, k = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            result.push(arr1[i]); // Common element found
            i++; j++; k++; // Move all pointers
        } 
        else if (arr1[i] < arr2[j]) {
            i++; // Move first array pointer
        } 
        else if (arr2[j] < arr3[k]) {
            j++; // Move second array pointer
        } 
        else {
            k++; // Move third array pointer
        }
    }

    return result.length ? result : [-1]; // Return [-1] if no common elements
}

// Example Usage
const arr1 = [1, 2, 4, 6, 8];
const arr2 = [2, 4, 6, 8, 10];
const arr3 = [2, 4, 8, 12];

console.log(findCommonElements(arr1, arr2, arr3)); // Output: [2, 4, 8]
console.log(findCommonElements([1, 5, 9], [2, 6, 10], [3, 7, 11])); // Output: [-1] (No common elements)
