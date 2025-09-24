
///using keyworkd let and var
for(var i=1;i<5;i++){
    (function(i){
        setTimeout(()=>{
            console.log(i)
        },1000)

    })(i)
 
   
}

for (var i = 0; i < 5; i++) {
    setTimeout(function(i) {
      console.log(i);
    }, 10, i); // 👈 passing 'i' directly
  }
  