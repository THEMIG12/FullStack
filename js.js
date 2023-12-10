
function binary(c){
    var s = "";
    if(Math.floor(c/2) > 2**c){
        
    }
    for(i = Math.floor(c/2); i >= 0 ; i--){
        if(c >= 2**i){
            s += "1";
            c -= 2**i;
        }
        else {
            s += "0";
        }
        /*
        console.log("s = " + s);
        console.log("2**i = " + 2**i);
        console.log("c = " + c);
        */
    }
    return s;
}

console.log(binary(5));
console.log(binary(4));
console.log(binary(3));
console.log(binary(8));

/*
function com_sum(c){
    sum = 0;
    for(n = 1; n <= c; n++){
        sum += n;
    }
    return sum;
}

console.log(com_sum(2));
console.log(com_sum(3));
console.log(com_sum(4));
console.log(com_sum(5));
console.log(com_sum(6));
console.log(com_sum(7));
console.log(com_sum(8));
*/