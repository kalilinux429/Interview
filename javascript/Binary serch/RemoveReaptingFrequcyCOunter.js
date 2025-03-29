const array = [1, 1, 2, 3, 4, 4, 5, 2];
function repeating(arr){
  let result=[];
  let obj={};
  for(let val of arr){
    obj[val]=(obj[val]||0)+1
  }
  for(key in obj){
    if(obj[key]>1){
      result.push(key)
    }
  }
  return result
}

console.log(repeating(array))

//iterativ apporch

const arr2 = [1, 1, 2, 3, 4, 4, 5, 2];
function repeating(arr){
let duplicates=[];
for(let i=0; i<array.length-1;i++){
  for(let j=i+1;j<array.length;j++){
    if(arr[i] === arr[j] && !duplicates.includes(arr[i])){
      duplicates.push(arr[i])
    }
  }
}
return duplicates
}

console.log(repeating(arr2))