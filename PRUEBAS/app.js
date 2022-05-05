/*const repeatString = function() {
    for(let i = 0; i<4; i++){
       console.log(i) 
    }
};


repeatString();*/

//-----------------------------02_repeatString---------------------------------

const p = document.querySelector('p')

function repeatString(str, r) {
    if(r < 0){
        console.log("ERROR");
        //return ERROR;
    }else {
        for(let i = 0; i <= r; i++){
            
                let newStr;
                newStr = str.repeat(r);
                console.log(newStr);
                p.innerHTML=newStr;
                return newStr;
        }
    }

};

repeatString("hey", 0);


