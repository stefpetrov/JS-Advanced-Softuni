function solve(input){


    let collection = {}

    for (let line of input) {

        let [product, price] = line.split(" : ")

        collection[product] = Number(price)

    }
    let sorted = Object.keys(collection).sort((a,b) => a.localeCompare(b))

    let result = {}

    for (let element of sorted) {
        let letter = element[0]

        result[letter] = []

    }
    for (let element of sorted) {
        let letter = element[0];

        if(result.hasOwnProperty(letter)){
            result[letter].push(element)
            result[letter].push(collection[element])
        }
    }


    for(let letter in result){
        console.log(`${letter}`);
        
        for(let i = 0; i < result[letter].length; i++){
            if(i % 2 === 0){
                console.log(`  ${result[letter][i]}: ${result[letter][i+1]}`)
            }
        }
    }

}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])