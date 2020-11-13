// Question 1 : SI

var pokemonIncineroar
var pokemonAdverse
var DarkestLariat

//advesrse Si c’est de type eau, les dommages


    if ( pokemonAdverse === "eau "){
    attak = DarkestLariat*2
}

var randomNumber;
var nombre1 = 0;
var nombre0 = 0;

//boucle 2 fois pile/face

for(var i = 0; i < 2; i++){
    randomNumber = Math.round(Math.random());

    if(randomNumber === 1){
        nombre1++;
    }
    else{
        nombre0++;
    }

    randomNumber = Math.round(Math.random());

    if(randomNumber === 0){
        nombre0++;
    }
    else{
        nombre1++;
    }
}


document.write("Attak " + nombre1 + " 1 <br>");
document.write("Attak " + nombre0 + " 0");
