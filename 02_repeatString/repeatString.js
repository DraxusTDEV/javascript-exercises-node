const repeatString = function(str, num) {
    if(num < 0){
        //console.log("ERROR");
        return "ERROR";
    } else {
            for(let i = 0; i <= num; i++){
            let newStr;
            newStr = str.repeat(num);
            //console.log(newStr);
            //p.innerHTML=newStr
            return newStr;
            }
    }
};

// Do not edit below this line
module.exports = repeatString;
