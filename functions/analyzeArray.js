function analyzeArray(array){
    const object = {
        max: Math.max(...array),
        min: Math.min(...array),
        sum: array.reduce((acc,curr)=> acc+curr,0),
        average: array.reduce((acc,curr)=> acc+curr,0)/ array.length,
        length: array.length
    }
    return object;
}

export {analyzeArray};