let alph = "abcdefghijklmnopqrstuvwxyz";
let lettre = "i"

const spliter = alph.split('');

let spliterindex = spliter.indexOf(lettre)

console.log(spliterindex);

let slicer = spliter.slice(spliterindex)
console.log(slicer);

for (let list of slicer ) {
  console.log(list)
}
    
