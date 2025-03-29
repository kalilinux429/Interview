//Removing doller from started of string
//it will reemvoe all occurences
const doller = ["$Apple", "$Banana", "$Cherry"];


let result=[]
for(let i=0;i<doller.length;i++){
  let str=''
  for(let j=0;j<doller[i].length;j++){
    console.log(doller[i][j])
    if(doller[i][j] !=='$'){
      str+=doller[i][j]
    }
  }
  result.push(str)
}
console.log(result)

//using inbuld mthods

const doller = ["$Apple", "$Banana", "$Cherry"];

const result = doller.map(fruit => 
  fruit.split('').filter(char => char !== '$').join('')
);

console.log(result);




/////removie from onley specifil locatin

function removeFirstSymbol(arr, symbol) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let str = "";
  
      for (let j = 0; j < arr[i].length; j++) {
        if (j === 0 && arr[i][j] === symbol) continue; // Skip symbol only at index 0
        str += arr[i][j]; // Add remaining characters
      }
  
      result.push(str);
    }
  
    return result;
  }
  
  // Example usage:
  console.log(removeFirstSymbol(["$Apple", "$$Banana", "Ch$erry"], "$")); 
  // Output: ["Apple", "$Banana", "Ch$erry"]
  

  //to remove doller or nay symbole form any index


  function removeSymbolAtThirdPlace(arr, symbol) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
      let str = "";
      
      for (let j = 0; j < arr[i].length; j++) {
        if (j === 3 && arr[i][j] === symbol) continue; // Skip '$' at index 3
        str += arr[i][j]; // Add all other characters
      }
      
      result.push(str);
    }
    
    return result;
  }
  
  // Example usage:
  const data = ["Ap$ple", "Ban$ana", "Ch$erry", "Gr$ape$"];
  console.log(removeSymbolAtThirdPlace(data, "$"));
  

  //using inbuld methos

  function removeSymbolAtIndex(arr, symbol, index) {
    return arr.map(str => str[index] === symbol ? str.slice(0, index) + str.slice(index + 1) : str);
  }
  
  // Example usage:
  const data = ["Ap$ple", "Ban$ana", "Ch$erry", "Gr$ape$"];
  console.log(removeSymbolAtIndex(data, "$", 3));
  