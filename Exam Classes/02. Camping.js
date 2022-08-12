class SummerCamp{
    constructor(organizer,location){
        this.organizer = organizer,
        this.location = location,
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        }
        this.listOfParticipants = []

    }
    registerParticipant(name,condition,money){

        if(!this.priceForTheCamp[condition]){
            throw new Error("Unsuccessful registration at the camp.")
        }

        let foundName = this.listOfParticipants.find(el => el.name == name)
        if(foundName){
            return `The ${name} is already registered at the camp.`
        }
       
        if(this.priceForTheCamp[condition] > money){
            return `The money is not enough to pay the stay at the camp.`
        } else{
            this.listOfParticipants.push({name, condition, power: 100, wins: 0})
            return `The ${name} was successfully registered.`

        }

    
    }

    unregisterParticipant(name){
   
        let foundName = this.listOfParticipants.find(el => el.name == name)
        if(!foundName){
            throw new Error(`The ${name} is not registered in the camp.`)
        }

            let indexToDel = this.listOfParticipants.indexOf(foundName)
            this.listOfParticipants.splice(indexToDel,1)
            return `The ${name} removed successfully.`
        
    }

    timeToPlay(typeOfGame,participant1,participant2){

        if(typeOfGame == "Battleship"){
            let foundName = this.listOfParticipants.find(el => el.name == participant1)
        if(!foundName){
            throw new Error(`Invalid entered name/s.`)
        } else{
            foundName.power += 20
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
        }else if(typeOfGame == "WaterBalloonFights"){
            let FirstFound = this.listOfParticipants.find(el =>{
                if(el.name == participant1){
                    return el
                    
                }
            })
            let SecondFound = this.listOfParticipants.find(el =>{
                if(el.name == participant2){
                    return el
                }
            })
            if(FirstFound && SecondFound){
                if(FirstFound.condition !== SecondFound.condition){
                    throw new Error(`Choose players with equal condition.`)
                }
                else{
                    if(FirstFound.power > SecondFound.power){
                        FirstFound.wins += 1
                        return `The ${participant1} is winner in the game ${typeOfGame}.`
                    }
                    else if(SecondFound.power > FirstFound.power){
                        SecondFound.wins += 1
                        return `The ${participant2} is winner in the game ${typeOfGame}.`
                    }
                    else if(SecondFound.power == FirstFound.power){
                        return `There is no winner.`
                    }
                }
            }else{
                throw new Error(`Invalid entered name/s.`)
            }

        }

    }

    toString(){
        let result = []
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)

        let sorted = this.listOfParticipants.sort((a,b)=> b.wins - a.wins)
        sorted.map(el => result.push(`${el.name} - ${el.condition} - ${el.power} - ${el.wins}`))

        return result.join("\n")
    } 

}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());