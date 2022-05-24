const triABulle = (n) => { 
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < (n.length - i -1); j++) {
            if (n[j] > n[j+1]) {
              // var trie = (n[j+1], n[j]) == (n[j], n[j+1]) == trie
                var tmp = n[j]; 
                n[j] = n[j+1]; 
                n[j+1] = tmp;
              
            }
            
        }
             
    }
}
var nombres = [1,5,12,4,6,88,40,22,36,10]
triABulle(nombres)
console.log(nombres);