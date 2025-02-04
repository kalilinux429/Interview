const array=[1,2,3,5,6]
function removeELemnt(nums, val){
  let k=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i] !==val){
      nums[k]=nums[i]
      k++
    }
  }
nums.length=k
return nums
}

const k=removeELemnt(array,6)
console.log(k)

//opuput [1,2,3,4]