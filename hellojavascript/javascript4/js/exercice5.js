var randomNumber;
var nombre1 = 0;
var nombre0 = 0;

//boucle 2 fois
for(var i = 0; i < 2; i++){
    randomNumber = Math.round(Math.random());

    if(randomNumber === 1){
        nombre1++;
    }
    else{
        nombre0++;
    }
}


document.write("J'ai généré " + nombre1 + " 1 <br>");
document.write("J'ai généré " + nombre0 + " 0");
