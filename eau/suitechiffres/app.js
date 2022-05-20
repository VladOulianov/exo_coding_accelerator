const result = [];
result.length = 3;

function combine(input, len, start) {
  if(len === 0) {
    console.log( result.join(" ") ); 
    return;
  }
  for (var i = start; i <= input.length - len; i++) {
    result[result.length - len] = input[i];
    combine(input, len-1, i+1 );
  }
}

const array = [0,1,2,3,4,5,6,7,8,9];    
combine( array, result.length, 0);
