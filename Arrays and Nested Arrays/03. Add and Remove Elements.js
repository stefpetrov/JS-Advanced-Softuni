function solve(arr){

    let newArr = []

    for(let i = 0; i< arr.length; i++){

        let command = arr[i]

        if(command === "add"){

            newArr.push(i+1)
        } else if(command === "remove"){
            newArr.pop()
        }



    }
    if(newArr.length !== 0){
    newArr.forEach(el => console.log(el))
    } else{
        console.log("Empty")
    }

}

solve(['remove', 
'remove', 
'remove'])