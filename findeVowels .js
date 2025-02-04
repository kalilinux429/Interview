let str='hi mahesh how are you';
function findVowels(){

  str=str.toLowerCase()
const vowvels=['a','e','i','o','u'];
let count=0

for(let val of str){
 
  if(vowvels.includes(val)){
    count++

  }
  
}
return count
}
console.log(findVowels(str))