/**
 * @param {string} s
 * @return {string}
 */
const str='hi how are you'
var reverseWords = function(s) {

    let str=s.split(' ');
    let rev=[]
    for( let i=str.length-1; i>=0;i--){
       rev.push(str[i])
    }
    let result=rev.join(' ').trim().replace(/\s+/g, " ");
    return result
   
};
    
console.log(reverseWords(str))