var arguments = process.argv.slice(2);

var cur = arguments;
for(var i=0; i<10; i++) {
  cur = cur/2 + arguments/(cur*2);
}
console.log(cur);