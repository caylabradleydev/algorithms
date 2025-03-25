/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let n;

    for(let char of s){
        n = stack.length - 1

        if(char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else {
            if(char === ')' && stack[n] !== '(') return false
            if(char === ']' && stack[n] !== '[') return false
            if(char === '}' && stack[n] !== '{') return false
            
            stack.pop();
        }
    }

    return !stack.length
};