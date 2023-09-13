// const a = (x) =>{
//     return Number(x.toString().split("").reverse().join(""))
// }

// console.log(a(3433));

const y = (num) => {
    var rev =0
    while (num>0) {
        var rem = num%10
        rev = rev*10+rem
        num  = Math.floor(num/10)
    }
    return rev
}

console.log(y(458984931));