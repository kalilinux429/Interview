const obj={
    name:'mahesh',
    email:'xyz@gmail.comd',
    lastName:"kapale",
    a:4,
    b:5,
    c:7
}
for(key in obj){
    if(typeof obj[key]=== 'number'){
        obj[key]*=2
    }
}



//object methods
console.log(Object.values(obj))



