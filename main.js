function decoy(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj
    }else{
        let arr2 = Array.isArray(obj) ? [] : {}
        for(let key in obj){
            if(typeof obj[key] === 'object' && obj[key] !== null){
                arr2[key] = decoy(obj[key])
            }else{
                arr2[key] = obj[key]
            }
        }
      
        return arr2
    }

}

arr = [1,3,[1,6]]
console.log(decoy(arr))

