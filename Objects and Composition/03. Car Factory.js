function solve(order){

    let storage = {

        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
        hatchback: { type: 'hatchback', color: "as required" },
        coupe: { type: 'coupe', color: "as required" },
        wheelsize: 1

    }

    let newCar = {}

    newCar.model = order.model

    if(order.power > 120){
        newCar.engine = storage.monsterEngine

    }else if(order.power > 90){
        newCar.engine = storage.normalEngine


    } else{
        newCar.engine = storage.smallEngine

    }

    newCar.carriage = {
    type: order.carriage,
    color: order.color
    }

    if(order.wheelsize % 2 === 0){
        let newWheels = order.wheelsize - 1
        newCar.wheels = [newWheels,newWheels,newWheels,newWheels]
    } else{
        newCar.wheels = [order.wheelsize,order.wheelsize,order.wheelsize,order.wheelsize]
    }
    
    
    return newCar

    
}

solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 })