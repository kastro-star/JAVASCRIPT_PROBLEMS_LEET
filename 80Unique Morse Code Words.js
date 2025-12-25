/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodeMap = {
    'a': '.-',    'b': '-...',  'c': '-.-.', 
    'd': '-..',   'e': '.',     'f': '..-.',
    'g': '--.',   'h': '....',  'i': '..',
    'j': '.---',  'k': '-.-',   'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',
    'p': '.--.',  'q': '--.-',  'r': '.-.',
    's': '...',   't': '-',     'u': '..-',
    'v': '...-',  'w': '.--',   'x': '-..-',
    'y': '-.--',  'z': '--..'
};
let check = new Set();
for(let i=0;i<words.length;i++){
    let temp ="";
    let wor = words[i];
    for(let k of wor){
        temp +=morseCodeMap[k];
    }
    check.add(temp);
}
let fin =check.size;
return fin;

};