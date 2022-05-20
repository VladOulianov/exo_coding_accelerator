var arguments = process.argv.slice(2);



function spliter(a) {
   return a.split('')
}
// function lenghting(a) {
//     return a.length
// }
let splitResult = spliter(arguments[0])
// let lengthResult = lengthing(splitResult)

console.log(splitResult.length);

alert(lengthResult);
