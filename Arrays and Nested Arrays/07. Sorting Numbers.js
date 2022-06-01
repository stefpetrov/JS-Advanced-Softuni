function solve(arr){

    let sorted = arr.sort((a,b) => a-b)

    let result = []

    while(sorted.length !== 0){

        result.push(arr.shift())
        result.push(arr.pop())
    }
    return result

}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]) 