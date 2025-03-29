
function zeroSum(num){ 
    let left=0;let right=num.length-1;
    while(left < right){
      let sum=num[left]-num[right];
      if(sum === 0){
        return [num[left],num[right]]
      }else if(sum>0){
       right--
      }else{
        left++
      }
    }
    }
    
    console.log(zeroSum(arr))