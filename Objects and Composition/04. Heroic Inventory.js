function solve(input){

    
    let collection = []

    for (const line of input) {
        let splitted = line.split(" / ")
        let name = splitted[0]
        let level = Number(splitted[1])
        let items = splitted[2]
         
        items = items ? items.split(", "):[]

        
        
        let heroe = {}
        heroe.name = name
        heroe.level = Number(level)
        heroe.items = []
        items.forEach(el => heroe.items.push(el))

        collection.push(heroe)
    }


    let collectionAsJSON = JSON.stringify(collection)

    return collectionAsJSON


    


}

solve(['Isacc / 25 / ',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])