class ArtGallery{
    constructor(creator){
        this.creator = creator
        this.possibleArticles = {"picture":200,"photo":50,"item":250}
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity){

        articleModel = articleModel.toLowerCase()

        if(!this.possibleArticles[articleModel]){
            throw new Error("This article model is not included in this gallery!")
        }
        let articleModelFound= this.listOfArticles.find(el => el.articleModel == articleModel)
        let articleNameFound = this.listOfArticles.find(el => el.articleName == articleName)

        if(articleNameFound && articleModelFound){

            let currentArticle = this.listOfArticles.find(el => el.articleName == articleName)
            currentArticle.quantity += quantity
        }else{
            this.listOfArticles.push({articleModel, articleName, quantity})
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }

    inviteGuest(guestName, personality){

        let foundGuest = this.guests.find(el => el.guestName == guestName)

        if(foundGuest){
            throw new Error(`${guestName} has already been invited.`)
        }else{
           let tablePoints = {
               "Vip":500,
               "Middle":250
           }
           let points =Number(tablePoints[personality]? tablePoints[personality] : 50 )
            this.guests.push({guestName,points,purchaseArticle:0})

            return `You have successfully invited ${guestName}!`
        }



    }

    buyArticle(articleModel,articleName,guestName){

       let articleFound = this.listOfArticles.find(el => el.articleName == articleName)
       let guestFound = this.guests.find(el => el.guestName == guestName)

       if(!articleFound || articleFound.articleModel !== articleModel){
           throw new Error('This article is not found.')
       }
       if(articleFound.quantity == 0){
           return `The ${articleName} is not available.`
       }
       

       if(!guestFound){
           return `This guest is not invited.`
       }

       if(guestFound.points < this.possibleArticles[articleModel]){
        return `You need more points to purchase the article.`
       }else{
           let articlePoint = this.possibleArticles[articleModel]
        guestFound.points -= articlePoint
        articleFound.quantity -= 1
        guestFound.purchaseArticle += 1
        return `${guestName} successfully purchased the article worth ${articlePoint} points.`
       }
       

    }

    showGalleryInfo(criteria){

        if(criteria == "article"){

            let result = []
            result.push("Articles information:")

            this.listOfArticles.forEach(el =>{
               return result.push(`${el.articleModel} - ${el.articleName} - ${el.quantity}`)
            })
            return result.join("\n")
        }

        if(criteria == "guest"){

            let result = []
            result.push("Guests information:")

            this.guests.forEach(el =>{
               return result.push(`${el.guestName} - ${el.purchaseArticle}`)
            })
            return result.join("\n")
        }

    }
}


const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));