let arguments = process.argv.slice(2);
let arguments2 = process.argv.slice(2);

let arr1 = arguments;
let arr2 = arguments2.sort((a, b) => a - b);

function arraysAreIdentical(arr1, arr2){
    if (arr1.length !== arr2.length) return false;
    
    for (var i = 0, len = arr1.length; i < len; i++){
        if (arr1[i] !== arr2[i]){
            return console.log("false");
        }
    }
    return console.log("true"); ; 
}

var aller = arraysAreIdentical(arr1, arr2)