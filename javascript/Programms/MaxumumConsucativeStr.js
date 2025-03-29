const str = 'abcddddjk';

let maxCount = 0;
let value=''

for (let i = 0; i < str.length; i++) {
  let count = 1; // Count current character
  while (str[i] === str[i + 1]) {
    count++;
    i++; // Skip consecutive characters
  }
  maxCount = Math.max(maxCount, count);
 
}

console.log('Max consecutive count:', maxCount);

