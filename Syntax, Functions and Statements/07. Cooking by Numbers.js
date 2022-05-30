function solve(num,oper1,oper2,oper3,oper4,oper5){

    num = Number(num)

    if(oper1 === "chop"){
         num = num / 2
         console.log(num)

    }else if(oper1 === "dice"){
        num = Math.sqrt(num)
        console.log(num)


    }else if(oper1 === "spice"){
        num =  num + 1
        console.log(num)

        
    } else if(oper1 === "bake"){
        num = num * 3
        console.log(num)


    } else if(oper1 === "fillet"){
        num = num * 0.8
        console.log(num)


    }


    if(oper2 === "chop"){
        num = num / 2
        console.log(num)

   }else if(oper2 === "dice"){
       num = Math.sqrt(num)
       console.log(num)


   }else if(oper2 === "spice"){
       num =  num + 1
       console.log(num)

       
   } else if(oper2 === "bake"){
       num = num * 3
       console.log(num)


   } else if(oper2 === "fillet"){
       num = num * 0.8
       console.log(num)


   }

   if(oper3 === "chop"){
    num = num / 2
    console.log(num)

}else if(oper3 === "dice"){
   num = Math.sqrt(num)
   console.log(num)


}else if(oper3 === "spice"){
   num =  num + 1
   console.log(num)

   
} else if(oper3 === "bake"){
   num = num * 3
   console.log(num)


} else if(oper3 === "fillet"){
   num = num * 0.8
   console.log(num)


}

if(oper4 === "chop"){
    num = num / 2
    console.log(num)

}else if(oper4 === "dice"){
   num = Math.sqrt(num)
   console.log(num)


}else if(oper4 === "spice"){
   num =  num + 1
   console.log(num)

   
} else if(oper4 === "bake"){
   num = num * 3
   console.log(num)


} else if(oper4 === "fillet"){
   num = num * 0.8
   console.log(num)


}

if(oper5 === "chop"){
    num = num / 2
    console.log(num)

}else if(oper5 === "dice"){
   num = Math.sqrt(num)
   console.log(num)


}else if(oper5 === "spice"){
   num =  num + 1
   console.log(num)

   
} else if(oper5 === "bake"){
   num = num * 3
   console.log(num)


} else if(oper5 === "fillet"){
   num = (num * 0.8).toFixed(1)
   console.log(num)


}



}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

