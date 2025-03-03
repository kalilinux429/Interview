const users = [
    {
        id: 1,
        name: "Suchit",
        address: {
            city: "Pune",
            country: "India"
        },
        contacts: [
            { type: "email", value: "suchit@example.com" },
            { type: "phone", value: "1234567890" }
        ]
    },
    {
        id: 2,
        name: "Amit",
        address: {
            city: "Mumbai",
            country: "India"
        },
        contacts: [
            { type: "email", value: "amit@example.com" },
            { type: "phone", value: "9876543210" }
        ],
        friends: [
            {
                id: 3,
                name: "Rohan",
                address: {
                    city: "Delhi",
                    country: "India"
                }
            }
        ]
    }
];




function iterateobject(obj) {
for (var key in obj) {
if (typeof obj[key] === "object" && obj[key] !== null){
iterateobject(obj[key]); // Recursive call for neste
} else {
console. log (key + ":", obj[key]);

}
}
}

iterateobject(users);

//importnt point is that you have to use recursion
//firstly you have to check wheter this is object and is shoud not be null
//then iterate object
//then use recusive function

//flatten array

const array=[[1,2,[3,4]]];

function flaten(arr){
  let array=[]
  for(let i=0; i<arr.length;i++){
    if(Array.isArray(arr[i])){
      array=array.concat(flaten(arr[i]))
      
    }else{
      array.push(arr[i])
    }
  }
  return array
  
}

console.log(flaten(array))

