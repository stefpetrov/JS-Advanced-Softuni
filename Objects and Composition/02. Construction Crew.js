function solve(worker){


    if(worker.dizziness){

        let neededWater = 0.1 * worker.weight * worker.experience
        
        worker.levelOfHydrated = neededWater
        worker.dizziness = false
        
    }
    return worker
    

}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })