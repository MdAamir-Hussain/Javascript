var str = "saare jaha se achha hindustan humara";

var savedStr = str.split(" ")
.map(function (word){
    return word.split("").reverse().join("")

})

console.log(savedStr.join(" "));