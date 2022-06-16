function solve(){

    let arr = Array.from(arguments)

    let data = {}

    for (const el of arr) {
        let type = typeof el
        console.log(`${type}: ${el}`)
        if(!data.hasOwnProperty(type)){
            data[type] = 0
        }
            
            data[type]++
        
    }

    let sorted = Object.keys(data).sort((a,b)=> data[b] - data[a])

    let result = sorted.map((x)=> {
        return {
            [x] : data[x]
        }
    })
  
    result.forEach(el =>{
      Object.entries(el).forEach(e => console.log(`${e[0]} = ${e[1]}`))

    })

}

solve('cat', 42, function () { console.log('Hello world!') }, 'dog')