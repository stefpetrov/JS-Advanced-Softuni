function solution(){

    const apple = {

        carbohydrate: 1,
        flavour: 2
    }
    const lemonade = {

        carbohydrate: 10,
        flavour: 20
    }
    const burger = {

        carbohydrate: 5,
        fat:7,
        flavour: 3
    }
    const eggs = {

        protein: 5,
        fat: 1,
        flavour: 1
    }
    const turkey = {

        protein: 10,
        carbohydrate: 10,
        fat: 10,
        flavour: 10
    }
    let ingridients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let data = {
        apple,
        lemonade,
        burger,
        turkey,
        eggs
    }

    return (input)=>{
        let splitted = input.split(" ")
        let command = splitted.shift()

        if(command === "restock"){
            let ingr = splitted.shift()
            let qty = Number(splitted.shift())
            if(ingridients.hasOwnProperty(ingr)){
            ingridients[ingr] += qty
            }
            return "Success"

        } else if(command === "report"){

            return Object.keys(ingridients).map(k => `${k}=${ingridients[k]}`).join(" ")
        } else if(command === "prepare"){
            let product = splitted.shift()
            let quantity = Number(splitted.shift())
            let isEnough = true

           for(let element of (Object.keys(data[product]))){


            let neededQty = data[product][element] * quantity
            if(ingridients[element] < neededQty){
                isEnough = false
                return `Error: not enough ${element} in stock`
            }
            else{
                ingridients[element] -= neededQty
                continue
            }
           }
           if(isEnough){
               return 'Success'
           }
        }

    }

}

let manager = solution(); 
console.log (manager ("restock carbohydrate 10")); // Success 
console.log (manager ("restock flavour 10")); // Error: not enough carbohydrate in stock 
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10")); // Success 
console.log (manager ("prepare burger 1")); // Error: not enough carbohydrate in stock 
console.log (manager ("report"));


