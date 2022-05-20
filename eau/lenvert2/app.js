var arguments = process.argv.slice(2);
console.log(arguments);

// let spliter = (a) => {
//    return  a.split(" ");
// };

try {
   let revercer = (a) => {
   return  a.reverse();
};

let reverse = revercer(arguments)
console.log(reverse);
} catch (error) {
   
}



// let colle = (a)=>{
//     return a.join('')
// }

//let splita = spliter(arguments)

//let coller = colle(reverse)

