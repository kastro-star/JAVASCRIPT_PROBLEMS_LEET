/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowels = [];
    for(let k of s){
        if("AEIOUaeiou".includes(k)){
            vowels.push(k);
        }
    }
    vowels.sort();
    let fin ="";
    let count=0;
    for(let i=0;i<s.length;i++){
        if("AEIOUaeiou".includes(s[i])){
            fin += vowels[count++];
        }
        else{
            fin += s[i];
        }
    }
    return fin;
};