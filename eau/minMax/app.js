var arguments = process.argv.slice(2);

var argumentsInt = arguments.map(elem => parseInt(elem))

let a1 = Math.min(...argumentsInt)
let b1 = Math.max(...argumentsInt)


function minMax(a,b) {
  
    let str = '';
    
    
    for (let i = a; i < b; i++) {
      str = str + i;
        str = str + " "
      
    }
    return str
}

const result = minMax(a1,b1)
console.log(result);