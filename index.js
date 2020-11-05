// Your code here

const mapToNegativize = (array) => {
    let newArray = []

    for(let i=0; i < array.length; i++){
        newArray.push(array[i] * (-1))
    }
    return newArray
}

const mapToNoChange = (array) => {
    let newArray = []

    for(let i=0; i < array.length; i++){
       newArray.push(array[i])  
    }
    return newArray
}

const mapToDouble = (array) => {
    let newArray = []

    for(let i=0; i < array.length; i++){
       newArray.push(array[i] * 2)  
    }
    return newArray
}

const mapToSquare = (array) => {
    let newArray = []

    for(let i=0; i < array.length; i++){
       newArray.push(array[i] ** 2)  
    }
    return newArray
}

const reduceToTotal = (array, startingPoint) => {
    let total 

    if(startingPoint){
        total = startingPoint
    } else {
        total = 0
    }

    for(const item in array){
        total += array[item]
    }

    return total
}

const reduceToAllTrue = (array) => {
    let arrayBoolean
    for(const item in array){
        if (array[item]){
        arrayBoolean = true
        } else {
        arrayBoolean = false
        }
    }
    return arrayBoolean
}

const reduceToAnyTrue = (array) => {
    let arrayBoolean = false
    for(const item in array){
        if (array[item]){
            arrayBoolean = true
    }
}
    return arrayBoolean
}
