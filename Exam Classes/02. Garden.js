class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable
        this.plants = []
        this.storage = []
    }
    addPlant(plantName,spaceRequired){

        if(this.spaceAvailable < spaceRequired){
            throw new Error('Not enough space in the garden.')
        }
        this.plants.push({plantName, spaceRequired, ripe:false, quantity:0})
        this.spaceAvailable -= spaceRequired
        
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName,quantity){
        let isPlantInArray = false
        
        for (const plant of this.plants) {
            
            if(plant.plantName === plantName){
                isPlantInArray = true

                if(plant.ripe == true){
                    throw new Error(`The ${plantName} is already ripe.`)
                }
            }   
        }

        if(!isPlantInArray){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if(quantity <= 0){
            throw new Error('The quantity cannot be zero or negative.')
        }
        for (const plant of this.plants) {
            if(plant.plantName === plantName){
                plant.ripe = true
                plant.quantity += quantity
                if(quantity === 1){
                    return `${quantity} ${plantName} has successfully ripened.`
                } else if(quantity > 1){
                    return `${quantity} ${plantName}s have successfully ripened.`
                }
            }
        }    
    }

    harvestPlant(plantName){
        let isInTheGarden = false

        for (const plant of this.plants) {
            if(plant.plantName === plantName){
                isInTheGarden = true
                if(plant.ripe === false){
                    throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
                } else if(plant.ripe){
                    let indexOfPlant = this.plants.indexOf(plant)
                   let removedPlant = this.plants.splice(indexOfPlant,1)
                   this.spaceAvailable += removedPlant[0].spaceRequired
                   let quantity = plant.quantity
                    this.storage.push({plantName,quantity})

                    return `The ${plantName} has been successfully harvested.`
                }
            }
        }
        if(!isInTheGarden){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
    }
    
    generateReport(){
        let result = `The garden has ${this.spaceAvailable} free space left.\n`

       let sorted = this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName))
       let arrOfPlants = []
       sorted.forEach((plant)=>arrOfPlants.push(plant.plantName))
        result += `Plants in the garden: ${arrOfPlants.join(", ")}\n`
        
        if(this.storage.length === 0){
            result += 'Plants in storage: The storage is empty.'
        }else{
            result += 'Plants in storage: '
            let arrResult = []
            for (let plant of this.storage) {
                arrResult.push(`${plant.plantName} (${plant.quantity})`)

        }
        result += arrResult.join(", ")

        return result
        }
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());