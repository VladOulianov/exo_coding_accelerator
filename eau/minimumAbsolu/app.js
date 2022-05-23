const array = [5,12,25,18]

var result = array.flatMap(
    (v, i) => array.slice(i+1).map( w => v - w )
);

var positif = result.map(Math.abs);

var mini = Math.min(...positif)

console.log(mini);
