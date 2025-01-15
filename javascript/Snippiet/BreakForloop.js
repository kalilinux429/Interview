let array=[1,2,3,4,5,6];

array.forEach((item)=>{
  console.log(item)
  if(item ===3){
   array.length=0;//throw 'error'
  }
})
//ouput 1 2 3