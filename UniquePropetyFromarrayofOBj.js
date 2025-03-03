const users = [
    { id: 1, name: "Suchit", city: "Pune" },
    { id: 2, name: "Amit", city: "Mumbai" },
    { id: 3, name: "Suchit", city: "Delhi" },
    { id: 4, name: "Rohan", city: "Pune" },
];

let unique=[];
let seen={};
for(let item of users){
  if(!seen[item.city]){
    unique.push(item);
    seen[item.city]=true
  }
}
console.log(unique)
//given Object of array you ahve to 
//use object .seen propety for that array