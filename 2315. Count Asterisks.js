/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let green = 1;
    let count =0;
    for(let i=0;i<s.length;i++){
        if(green == 1 && s[i] == "*"){ count++ };
        if(s[i] == '|'){
            if(green == 1){
                green = 0;
            }
            else{
                green =1;
            }
        }
    }
    return count;
};