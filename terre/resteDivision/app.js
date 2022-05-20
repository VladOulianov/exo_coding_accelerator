var arguments = process.argv.slice(2);

function divide(a, b) {
  return a / b;
  //return parseInt(a)%parseInt(b)
}
function reste(a, b) {
  return a % b;
  //return parseInt(a)%parseInt(b)
}

var laDivision = divide(arguments[0], arguments[1]);
var leReste = reste(arguments[0], arguments[1]);
console.log(laDivision);

if (Number.isInteger(laDivision)) {
  console.log("resulta:", laDivision);
} else {
  console.log("resulta: err ");
}

if (Number.isInteger(leReste)) {
  console.log("reste:", leReste);
} else {
  console.log("reste: err ");
}
