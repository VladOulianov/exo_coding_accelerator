var arguments = process.argv.slice(2);

function isPrime(n) 
{
    
    if (n<2) {
        
     return  console.log("non")
    } else {
console.log(n);
        for (let i = 2; i <= Math.sqrt(n); i++) {
            
            if (n % i == 0) {
               return console.log("non");
            }else{
             return   console.log("oui");
            }
        
            
        }
       
    }
 
}
console.log(3 % 2);
var test = isPrime(arguments[0])



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