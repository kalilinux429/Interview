  let str='abcdeeefghiiie';

let obj={};
let maxCount=0;
let maxChar=''
for(let val of str){
    obj[val]=(obj[val]||0)+1;
}
    for(let item in obj){
        if(obj[item]>maxCount){
            maxCount=obj[item]
            maxChar=item

        }
    }


console.log(maxChar,maxCount)


