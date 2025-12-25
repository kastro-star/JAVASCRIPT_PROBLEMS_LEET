/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let count=0;
    let num=0;
    for(let i=0;i<s.length;i++){
        if(s[i] == '('){
            count++;
            stack.push('('); 
        }
        else if(s[i] == ')'){
            stack.pop();
            count--;
        }
        num=Math.max(count,num);
    }
    let fin=Math.max(num,count);
    return fin;
};