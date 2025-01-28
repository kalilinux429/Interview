
const data=[
    { name:'b'},
     { name:'d'},
      { name:'e'},
       { name:'f'},
        { name:'g'}
   ]
   
   const newData=data.sort((a,b)=>a.name.localeCompare(b.name));
   console.log(newData)