let obj = {
    name: "JavaScript",
    type: "Programming",
    year: 1995
  };
  
  
  let newObj={};
  
  for( let key in obj){
    // console.log(obj[key])
    newObj[obj[key]]=key
    // console.log(newObj)
  }
  console.log(obj)