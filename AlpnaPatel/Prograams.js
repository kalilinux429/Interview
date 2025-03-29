// Converting an array to an object with index-based keys
const arry = ['mango', 'banana', 'pineapple', 'pomegranate'];
let obj = {};

for (let i = 0; i < arry.length; i++) {
  obj[i] = arry[i];
}

console.log(obj);
// Output: { '0': 'mango', '1': 'banana', '2': 'pineapple', '3': 'pomegranate' }


// Converting an object back to an array
const objToArray = {
  '0': 'mango',
  '1': 'banana',
  '2': 'pineapple',
  '3': 'pomegranate'
};

let arr = [];
for (let key in objToArray) {
  arr.push(objToArray[key]);
}

console.log(arr);
// Output: ['mango', 'banana', 'pineapple', 'pomegranate']


// Using Object.values() and Object.keys()
console.log(Object.values(objToArray)); // ['mango', 'banana', 'pineapple', 'pomegranate']
console.log(Object.keys(objToArray));   // ['0', '1', '2', '3']


// Converting object to key-value pair array
let keyValueArray = Object.entries(objToArray);
console.log(keyValueArray);
// Output: [['0', 'mango'], ['1', 'banana'], ['2', 'pineapple'], ['3', 'pomegranate']]


// Removing duplicates from an array
const array = [7, 7, 7, 5, 2, 3, 4, 6];
let seen = {};
let unique = [];

array.forEach(value => {
  if (!seen[value]) {
    seen[value] = true;
    unique.push(value);
  }
});

console.log(unique);
// Output: [7, 5, 2, 3, 4, 6]


// Alternative method using a loop
let seenNumbers = {};
let uniqueNumbers = [];

for (let i = 0; i < array.length; i++) {
  if (!seenNumbers[array[i]]) {
    seenNumbers[array[i]] = true;
    uniqueNumbers.push(array[i]);
  }
}

console.log(uniqueNumbers);
// Output: [7, 5, 2, 3, 4, 6]


// Separating unique and repeated numbers from an array
const numbers = [7, 7, 7, 5, 2, 3, 4, 6];
let frequency = {};
let uniqueNum = [];
let repeatedNum = [];

for (let val of numbers) {
  frequency[val] = (frequency[val] || 0) + 1;
}

for (let key in frequency) {
  if (frequency[key] === 1) {
    uniqueNum.push(+key);
  } else {
    repeatedNum.push(+key);
  }
}

console.log(uniqueNum, repeatedNum);
// Output: [5, 2, 3, 4, 6] [7]


// Function scope and 'this' example
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method() {
    arguments[0](); // Invokes the function with the global 'this'
  }
};

obj.method(fn, 1);
// Output: 10 (because 'this' refers to the global object)


// Removing duplicate characters from a string
const str = 'programming';
let charCount = {};
let newStr = '';

for (let char of str) {
  charCount[char] = (charCount[char] || 0) + 1;
}

for (let key in charCount) {
  if (!newStr.includes(key)) {
    newStr += key;
  }
}

console.log(newStr);
// Output: 'progamin' (removing duplicate occurrences)





// ### 1. **Remove Duplicate Characters from a String**

const str = 'programming';
let obj = {};

// Count occurrences of each character
for (let val of str) {
    obj[val] = (obj[val] || 0) + 1;
}

let newStr = '';
// Construct a new string with unique characters
for (let key in obj) {
    if (!newStr.includes(key)) {
        newStr += key;
    }
}

console.log(newStr); // Output: "progamin"


// ### 2. **Incorrect While Loop (Infinite Loop Issue)**

let count; // Undefined, will cause infinite loop
while (count < 50) {
    console.log('counting');
    count++; // count is NaN, so loop runs indefinitely
}

console.log(count); 
// Fix: Initialize `count = 0;` before the loop


//  ### 3. **Find First Non-Repeating Character

function firstNonRepeatingChar(str) {
    let obj = {};

    // Count occurrences of each character
    for (let char of str) {
        obj[char] = (obj[char] || 0) + 1;
    }

    // Find the first character with count 1
    for (let char of str) {
        if (obj[char] === 1) {
            return char;
        }
    }

    return null; // If all characters are repeating
}

// Test cases
console.log(firstNonRepeatingChar("swiss"));  // Output: "w"
console.log(firstNonRepeatingChar("racecars"));// Output: "e"
console.log(firstNonRepeatingChar("aabbcc"));  // Output: null


### 4. **Check if Two Strings are Anagrams**

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false; // Anagrams must have the same length

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Test cases
console.log(areAnagrams("listen", "silent"));  // Output: true
console.log(areAnagrams("hello", "ollhe"));    // Output: true
console.log(areAnagrams("test", "best"));      // Output: false


// ### 5. **Find the Most Frequent Character in a String**

function mostFrequentChar(s) {
    let freqMap = {};
    let maxChar = '';
    let maxCount = 0;

    // Count character occurrences
    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;

        // Update max character if the count is higher
        if (freqMap[char] > maxCount) {
            maxCount = freqMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

// Test cases
console.log(mostFrequentChar("aabbbccccdd")); // Output: "c"
console.log(mostFrequentChar("abcd"));        // Output: "a"
console.log(mostFrequentChar("banana"));      // Output: "a"
console.log(mostFrequentChar(""));            // Output: "" (Empty string case)
console.log(mostFrequentChar("aaabb"));       // Output: "a"


// ---

// ### 6. **Convert a String to Title Case**
// ```javascript
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Test cases
console.log(toTitleCase("hello world"));      // Output: "Hello World"
console.log(toTitleCase("javaScript is fun"));// Output: "Javascript Is Fun"
console.log(toTitleCase("MY NAME IS SUCHIT"));// Output: "My Name Is Suchit"
console.log(toTitleCase("  leading spaces")); // Output: "  Leading Spaces"
```

