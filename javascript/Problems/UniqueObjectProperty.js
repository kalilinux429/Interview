const data=[
    { id: 3, name: "Eve" },
    { id: 1, name: "Charlie" },
    { id: 2, name: "Alice" },
    { id: 1, name: "Grace" },
    { id: 4, name: "Bob" },
    { id: 3, name: "Frank" },
    { id: 5, name: "Alice" },
    { id: 1, name: "David" },
    { id: 2, name: "Charlie" },
    { id: 4, name: "Eve" }
  ];
  
  const uniqueData=data.filter((item,index,self)=>{
    return index ===self.findIndex(e=>e.name === item.name)
    //any data you want to filter you can filter it by adding property to 
    //findedex and comparing it
  })
  console.log(uniqueData)
  
  
  //remove duplicateds using index
  

  