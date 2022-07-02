module.exports = function reverse (n) {
    let numToString = n.toString()
    let stringTonum = ''
    if(numToString[0] === '-' ){ 
        numToString = numToString.slice(1)

    }
     for(let i = numToString.length - 1; i >= 0; i--){
        stringTonum = stringTonum + numToString[i]
    } 
    return Number(stringTonum)
  
}
