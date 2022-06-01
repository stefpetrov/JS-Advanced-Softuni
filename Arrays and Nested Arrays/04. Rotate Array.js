function solve(arr, n){


    for(let i = 0; i < n; i++){

       let currentEl = arr.pop()
       arr.unshift(currentEl)
    }
    console.log(arr.join(" "))

}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)