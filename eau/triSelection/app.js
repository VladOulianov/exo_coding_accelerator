const triSelection = (a) => { 
    var length = a.length
    for (let i = 0; i < length; i++) {
        var min = i
        for (let j = i+1 ; j < length; j++) {
            if (a[j] < a[min]) {
                min = j
            } 
        }
        var tmp = a[i];
        a[i] = a[min];
        a[min] = tmp
    }
    return a
 }
const array = [1,45,21,32,48,55,18,46,951]
 triSelection(array)

console.log(array);