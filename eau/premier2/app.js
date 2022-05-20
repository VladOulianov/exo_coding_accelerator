var arguments = process.argv.slice(2);
var arguments = parseInt(arguments);
console.log(arguments);
function nbrPremier(nbr) {
  for (var i = 2; i < nbr; i++) if (nbr % i === 0) return false;
  return nbr > 1;
}
console.log(nbrPremier(17));

function getPrimes(max,arguments) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max ; ++i) {
        if (!sieve[i]) {
            //i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    console.log(primes);
    var indexOfArguments = primes.indexOf(arguments);
    var indexOfArguments = primes.slice(indexOfArguments);

  
    //console.log(primes.slice(indexOfArguments));
    return indexOfArguments[1]
}


var result = console.log(getPrimes(1000,arguments)); 

// function isPrime(n)
// {

//     if (n<2) {

//      return  console.log("non")

//     } else {
// console.log(n);
//         for (let i = 2; i <= Math.sqrt(n); i++) {

//             if (n % i == 0) {
//                return console.log("non");
//             }else{
//              return   console.log("oui");
//             }

//         }

//     }

// }
// console.log(3 % 2);
// var test = isPrime(arguments[0])

// function isPrime(n)
// {
//     // Check if n is less than 2 => not prime
//     if (n<2) return console.log("false");

//     // Loop from 2 to square root of n
//     for (let i = 2; i <= Math.sqrt(n); i++)
//         // If i is a divisor of n, n is not prime
//         if (n % i == 0) return console.log("false");

//     return console.log("true"); ;
// }

//  var test = isPrime(arguments[0])
