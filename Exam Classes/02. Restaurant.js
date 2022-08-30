class Restaurant{
    constructor(budgetMoney){

        this.budgetMoney = budgetMoney
        this.menu = {}
        this.stockProducts = {}
        this.history = []

    }

    loadProducts(products){

        for (let row of products) {
            let [productName,productQuantity,productTotalPrice] = row.split(" ")
            productQuantity = Number(productQuantity)
            productTotalPrice = Number(productTotalPrice)

            if(this.budgetMoney >= productTotalPrice){
                if(!this.stockProducts[productName]){
                    this.stockProducts[productName] = productQuantity
                    this.budgetMoney -= productTotalPrice
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
                }else{
                    this.stockProducts[productName] += productQuantity
                    this.budgetMoney -= productTotalPrice
                    this.history.push(`Successfully loaded ${productQuantity} ${productName}`)


                }
            } else{
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }

        }
    }

    addToMenu(meal,neededProducts,price){

        if(!this.menu[meal]){

            this.menu[meal] = {
                products: neededProducts,
                price
            }
            if(Object.keys(this.menu).length == 1){
                return (`Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`)
            } else{
                return (`Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length } meals in the menu, other ideas?`)
            }
        }else{
                return (`The ${meal} is already in the our menu, try something different.`)
        }
    }

    showTheMenu(){

        let result = []

        for(let dish in this.menu){
            result.push(`${dish} - $ ${this.menu[dish].price}`)
        }
        if(result.length == 0){
            return `Our menu is not ready yet, please come later...`
        }else{
            return result.join("\n")
        }
        
    }

    makeTheOrder(meal){
        if(!this.menu[meal]){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

       let neededProductsArray =this.menu[meal].products
        let isEnoughProducts = true
       for (const row of neededProductsArray) {
           let [product,quantity] = row.split(" ")
            quantity = Number(quantity)

           if(this.stockProducts[product] < quantity){
            isEnoughProducts = false
           }

       }
       if(!isEnoughProducts){
           return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
       }
       
       if(isEnoughProducts){
           this.budgetMoney += this.menu[meal].price
        
            for (const productInfo of neededProductsArray) {
                let [product,quantity] = productInfo.split(" ")
                quantity = Number(quantity)

                this.stockProducts[product] -= quantity
            }
            
           return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
       }

    }
}


let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));