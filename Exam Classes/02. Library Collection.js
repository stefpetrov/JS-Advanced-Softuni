class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity
        this.books = []
        this.maxCapacity = capacity
    }

    addBook(bookName,bookAuthor){
        if(this.capacity > 0){
            this.books.push({bookName,bookAuthor,payed:false})
            this.capacity -= 1
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        } else{
            throw new Error("Not enough space in the collection.")
        }

    }

    payBook(bookName){
        
        let isBookFound = false
        
        for (const book of this.books) {

            if(book.bookName === bookName){
                isBookFound = true
                if(book.payed === true){
                    throw new Error(`${bookName} has already been paid.`)
                } else{
                    book.payed = true
                    return `${bookName} has been successfully paid.`
                }
            }
        }
        if(!isBookFound){
            throw new Error(`${bookName} is not in the collection.`)
        }
    }
    removeBook(bookName){
    
        let book = this.books.find((b) => b.bookName == bookName)
      
        if(book == undefined){
            throw new Error(`The book, you're looking for, is not found.`)        
        }
        if(!book.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let index = this.books.indexOf(book)
        this.books.splice(index,1)
        this.capacity += 1
        return `${bookName} remove from the collection.`

        // let isbookFound = false
        // for (let book of this.books) {
        //     if(book.bookName === bookName){
        //         isBookFound = true

        //         if(book.payed === false){
        //             throw new Error(`${bookName} need to be paid before removing from the collection.`)
        //         } else{
        //             let indexToRemove = this.books.indexOf(book)
        //             this.books.splice(indexToRemove,1)
        //             this.capacity += 1
        //             return `${bookName} remove from the collection.`
        //         }

        //     }  
        // }
        // if(!isBookFound){
        //     throw new Error(`The book, you're looking for, is not found.`)
        // }
    }
    getStatistics(bookAuthor){
        if(arguments.length === 0){
            let result = ""

            result += `The book collection has ${this.maxCapacity - this.books.length} empty spots left.\n`
            this.books.sort((a,b) => {
              return  a.bookName.localeCompare(b.bookName)
            })
            for (const book of this.books) {
                result += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid": "Not Paid"}.\n`
            }
            result = result.trim()
           return result

            
        }else{
            let isAuthorFound = false
            for (const book of this.books) {
                if(book.bookAuthor === bookAuthor){
                   isAuthorFound = true
                   return `${book.bookName} == ${bookAuthor} - ${book.payed ? "Has Paid": "Not Paid"}.`
                }
                
            }
            if(!isAuthorFound){
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
        }

    }

}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());