//write a funciton  to count word from stirng and given lettetr
let str='hello world';
function value(str,letter){
  
  let count=0;
  for(let val of str){
    if(val ===letter){
      count++
    }
  }
  return count
  
}
console.log(value(str,'l'))