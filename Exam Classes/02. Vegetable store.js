class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    for (const vegetable of vegetables) {
      let [type, quantity, price] = vegetable.split(" ");
      quantity = Number(quantity);
      price = Number(price);
      let plant = {
        type,
        quantity,
        price,
      };
      let isFound = false;
      for (let product of this.availableProducts) {
        if (product.type == type) {
          isFound = true;
          product.quantity += quantity;
          if (product.price < price) {
            product.price = price;
          }
        }
        
      }
      if (!isFound) {
        this.availableProducts.push(plant);
      }
    }
    let resultArr = []
    for (const product of this.availableProducts) {
        resultArr.push(product.type)
    }
    return `Successfully added ${resultArr.join(", ")}`
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0

    for (const row of selectedProducts) {
        let [type,quantity] = row.split(" ")
        quantity = Number(quantity)

      let productToBuy = this.availableProducts.find(b => b.type === type)
      if(!productToBuy){
          throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
      }
       

       if(productToBuy.quantity < quantity){
          throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
    }
        totalPrice += (productToBuy.price * quantity)
        productToBuy.quantity -= quantity

      

        
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

  }

  rottingVegetable(type, quantity) {
       let isfound = false
    for (let product of this.availableProducts) {
        
        if(product.type == type){
            isfound = true
            if(quantity > product.quantity){
                product.quantity = 0
                return `The entire quantity of the ${type} has been removed.`
            }
            else{
                product.quantity -= quantity
                return `Some quantity of the ${type} has been removed.`
            }
        }
    }

    if(!isfound){
        throw new Error(`${type} is not available in the store.`)
    }

  }

  revision() {
      let result = []

      result.push('Available vegetables:')
      this.availableProducts.sort((a,b)=> a.price - b.price)
        this.availableProducts.forEach(el => result.push(`${el.type}-${el.quantity}-$${el.price}`))
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)

        return result.join('\n')
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
