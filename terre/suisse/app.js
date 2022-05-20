var arguments = process.argv.slice(2);


function suisse(n) {
    n.sort((a, b) => a - b);
    return n[1];
}

var midle = suisse(arguments)

console.log(midle);