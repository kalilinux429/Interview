
let sentence = "hi my name is suchit kapale"; 
let words = sentence.split(" "); // Split sentence into words
let result = ""; // Initialize empty string

for (let i = 0; i < words.length; i++) {
    let word = words[i];
     result = word[0].toUpperCase() + word.slice(1)+'' // Capitalize first letter
    // Append modified word with space
}

console.log(result.trim()); // Remove extra space at the end
