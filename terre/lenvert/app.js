var arguments = process.argv.slice(2);


let spliter = (a) => {
   return  a.split('');
};

let revercer = (a) => {
   return  a.reverse();
};

let colle = (a)=>{
    return a.join('')
}

let splita = spliter(arguments[0])
let reverse = revercer(splita)
let coller = colle(reverse)

console.log(coller);