function counterWrapper(){
    let count =0
    return function(){
        count++
        console.log(count)
    }
}

const updateCount = counterWrapper()
updateCount()
updateCount()