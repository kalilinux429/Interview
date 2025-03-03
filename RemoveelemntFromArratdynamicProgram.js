
const arr =[1,2,5,6,7,8]
function removeElement(arr,ele){
  let newArray=[];
for(let i=0; i<arr.length;i++){
  if(arr[i] !== ele){
    newArray.push(arr[i])
  }
}
return newArray
  
}
console.log(removeElement(arr,7))
