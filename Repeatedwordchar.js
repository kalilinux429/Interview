
//in a given string find repeated char and string
let str='hellow word how are you';

let char={};
let word={};

for(let val of str){
  if(val !== ' '){
  char[val]=(char[val]||0)+1
  }
}
console.log(char)
let strArray=str.split(' ')
console.log(strArray)
for(let val of strArray){
  word[val]=(word[val]||0)+1
}
console.log(word)






