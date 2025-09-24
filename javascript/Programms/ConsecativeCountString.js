
let str='abcefkghjkkkk'

let count=1;
let result=''
for(let i=0; i<str.length; i++){
  if(str[i] === str[i+1]){
    count++
  }else{
    if(count>1){
      result+=str[i]+ count
    }
    count=1
  }
}

console.log(result)

////string compression