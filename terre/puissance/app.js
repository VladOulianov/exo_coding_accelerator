var arguments = process.argv.slice(2);

var nombre = parseInt(arguments[0],10)
var puissance = parseInt(arguments[1],10)

//console.log(puissance);

let verif = Number.isInteger(nombre && puissance)
//console.log(verif);

if (verif == true && puissance > 0 ) { 
   var total = 1
 for (var i = 1; i <= puissance; i++){
        total = total * nombre
       
   }  
 console.log(total); 
}else {
    console.log("err");
}
