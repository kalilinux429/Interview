//good
const array=[5,6,3,8,9,2,4,7];

function maxNumber(arr,k){
    // if(arr.length>k)return [];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}


arr.splice(arr.length-k,k);
return arr;

}
console.log(maxNumber(array,2))

