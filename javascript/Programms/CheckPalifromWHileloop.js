

let str='tent';
function checkPalidrom(str){
  let left=0;
  let right=str.length-1;
  while(left<right){
    if(str[left] !==str[right]){
      return false;
    }
    left++;
    right--
  }
  return true
}
console.log(checkPalidrom(str))