
const array=[1,1,3,4,5,6,7,7,7,8,9,9,1,1,1];

function consucative(arr,n){
  let count=0;
for(let item of array){
  if(item === n){
    count++;
  }else if(count>0){
    break;
  }
}
return count;
}

console.log(consucative(array,7))