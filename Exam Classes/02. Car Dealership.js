class CarDealership{
    constructor(name){
        this.name = name
        this.availableCars = []
        this.soldCars = []
        this.totalIncome = 0

    }
    
    addCar(model, horsepower, price, mileage){
        if(typeof model !== "string" || model === "" || !Number.isInteger(horsepower) || horsepower < 0 || price < 0 || mileage < 0){
            throw new Error("Invalid input!")
        }else{
            this.availableCars.push({model,horsepower,price,mileage})
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        }
    }
    sellCar(model, desiredMileage){
       let isCarAvailable = false
        for (let car of this.availableCars) {
            if(car.model === model){
                isCarAvailable = true
                if(car.mileage - desiredMileage <= 0){
                    car.mileage = car.mileage
                }
                else if(car.mileage - desiredMileage <= 40000){
                    car.price *= 0.95
                }else if(car.mileage - desiredMileage > 40000){
                    car.price *= 0.90
                }
                let horsepower = car.horsepower
                let soldPrice = car.price
                this.soldCars.push({model,horsepower,soldPrice})
                this.totalIncome += soldPrice
                let indexOfCar = this.availableCars.indexOf(car)
                this.availableCars.splice(indexOfCar,1)

                return `${model} was sold for ${soldPrice.toFixed(2)}$`
                
            }
        }
        if(!isCarAvailable){
            throw new Error(`${model} was not found!`)
        }
        
    }
    currentCar(){
        let result = `-Available cars:\n`
        if(this.availableCars.length === 0){
            return 'There are no available cars'
        }else{
        for (const car of this.availableCars) {
            result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`
        }
     }
     return result.trim()
    }
    salesReport(criteria){
        if(criteria !== "horsepower" && criteria !== "model"){
            throw new Error("Invalid criteria!")
        }
        if(criteria === "horsepower"){
            this.soldCars.sort((a,b)=>{
               return b.horsepower - a.horsepower
            })
        }else if(criteria === "model"){
            this.soldCars.sort((a,b)=>{
                return a.model.localeCompare(b.model)
            })
        }
        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`
        result += `-${this.soldCars.length} cars sold:\n`

        for (const car of this.soldCars) {
            result += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$\n`
        }
        return result.trim()
    }
}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));