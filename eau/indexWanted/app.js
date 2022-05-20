var arguments = process.argv.slice(2);

/* Easy mode */
// var lastOne = arguments.pop()
// var trouver = arguments.indexOf(lastOne)
// console.log(trouver);

const findIt = (a) => {
  var element = "";
  var cible = a.pop();

  cibleId = "";

  for (let i = 0; i < a.length; i++) {
    const element = i;
    if (a[i] === cible) {
      var cibleId = element;
    }
  }
  return cibleId;
};

var result = findIt(arguments);

console.log(result);
