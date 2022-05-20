var arguments = process.argv.slice(2)



function tri([a]) {
    if (isNaN(a)) {
        console.log("not only numbre");
    } else{
        console.log(a);
    }
}

let result = tri(arguments);
console.log(result)
