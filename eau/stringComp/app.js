//var arguments = process.argv.slice(2);

function cherche (string1, string2) {
    var test= string1.match(string2)
    return test;
}

var result = cherche("helloworld", "hello")

console.log(result);

var test2= "helloworld".match("hellowold")

console.log(test2);
a = "helloworld";
b = "hello";

console.log(a.includes(b));