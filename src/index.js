module.exports = function check(str, bracketsConfig) {
    let stack = [];

    let openbrackets = [];
    let closebrackets = [];

    for (let i = 0; i < bracketsConfig.length; i++){
        openbrackets.push(bracketsConfig[i][0]);
        closebrackets.push(bracketsConfig[i][1]);
    }

    let x;

    for (let i = 0; i < str.length; i++){

        x = str[i];

        if (openbrackets.includes(x)){
            if ((closebrackets.includes(x))&&(!stack.includes(x))){
                stack.push(x);
                if (str.substr(i+1,(str.length-1-i)).includes(x)){
                    continue;
                }
            }else if ((!closebrackets.includes(x))){
                stack.push(x);
                continue;
            }
        }

        if (stack.length === 0){
            return false;
        }

        let c;

        for (let j = 0; j < closebrackets.length; j++){
            if (x === closebrackets[j]){
                c = stack.pop();
                if (c !== openbrackets[j]){
                    return false;
                }
            }
        }
    }

    return stack.length === 0;
}
