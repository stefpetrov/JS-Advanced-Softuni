function solve(arr){

    let result = []
    let biggestNum = 0
    for (const num of arr) {

        let currentNum = num
        

        if(currentNum >= biggestNum){
            result.push(currentNum)
            biggestNum = currentNum
        }
    }
    return result

}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1])