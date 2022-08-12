function ticketSorter(data,criteria){

    class Ticket{
        constructor(destination,price,status){
            this.destination = destination
            this.price = price
            this.status = status
        }
    }
    let result = []

    for (const line of data) {
       let [destination,price,status] = line.split("|")
       price = Number(price)

        let newTicket = new Ticket(destination,price,status)

        result.push(newTicket)
        
    }

    result.sort((a,b)=>{
        if(criteria !== 'price'){
            return a[criteria].localeCompare(b[criteria])
        }else{
            return a[criteria] - b[criteria]
        }
    })
    return result

}

ticketSorter(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')


