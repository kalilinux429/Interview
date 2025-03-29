(function() {
    console.log(1);
  
    setTimeout((function() { 
      return function() { console.log('hellow'); };
    })(), 1000); 
  
    setTimeout(function() 
      { console.log('world');
    }), 2000); 
  
    console.log(4);
  })();