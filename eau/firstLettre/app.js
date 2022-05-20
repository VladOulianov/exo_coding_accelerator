var arguments = "bonjour mathilde, comment vas-tu ?!";

var add = arguments.split(" ");
//var add = [ 'bonjour', 'mathilde,', 'comment', 'vas-tu', '?!' ]
// add.forEach((element) => {
//   element = element.charAt(0).toUpperCase() + element.slice(1);
//   console.log(element.replace(/\n|\r/g,''));
//   return element
// });

for (var i = 0; i < add.length; i++) {
    add[i] = add[i].charAt(0).toUpperCase()+ add[i].slice(1);
    
 
  }

console.log(add.join(" "));