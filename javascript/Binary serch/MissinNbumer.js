//pseudo code

// 1.calculatee expected sum if array.length+1 
//let n=array.length+1;
//let expectedum=(n*(n+1)/2);
//calcuate actual sum
//expected sum -real sum


const arra=[1,2,4,5,6,7,8]

function missingNumber(arr){
  let n=arr.length+1;
  let expectedSum=(n*(n+1)/2);
  let actualsum=0;
  for(let i=0;i<arr.length;i++){
    actualsum+=arra[i]
  }
  
  return expectedSum-actualsum
}

console.log(missingNumber(arra))