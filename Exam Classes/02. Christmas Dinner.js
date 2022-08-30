class ChristmasDinner{
    constructor(budget){
       
        this.budget = budget
        this.dishes = []
        this.products = []
        this.guests = {}

    }

    set budget(value){
        if(value < 0){
            throw new Error("budget can not be a negative number")
        }
        this._budget = value
    }
    get budget(){
         return this._budget
       
    }


    



}
let dinner = new ChristmasDinner(-300);
console.log(dinner)