function addSum(...numbers){
    console.log(numbers);
    let result =0
    for(let num of numbers){
        result +=num
    }
    return result
}

console.log(addSum(1,2,3,4,5));