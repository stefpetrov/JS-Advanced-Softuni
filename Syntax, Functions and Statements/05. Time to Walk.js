function solve(steps,footprint,speed){

    let distanceInMeters = steps * footprint
    let distanceInKilometers = distanceInMeters / 1000
    let countOfRests = Math.floor(distanceInKilometers / 0.5)
    let restsInSeconds = countOfRests * 60

    let timeInSeconds = distanceInKilometers / speed * 60 * 60

    let finalInSeconds = Math.ceil(timeInSeconds + restsInSeconds)
    let hours = Math.trunc(finalInSeconds / 60 / 60)
    let timeAfterSubtractHours = finalInSeconds - (hours * 60 * 60)
    let minutes = Math.trunc(timeAfterSubtractHours / 60)
    let seconds = timeAfterSubtractHours - (minutes * 60)

    if(hours < 10){
        hours = "0" + hours
        
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(seconds < 10){
        seconds = "0" + seconds
    }

    console.log(`${hours}:${minutes}:${seconds}`)
    



}

solve(2564, 0.70, 5.5)