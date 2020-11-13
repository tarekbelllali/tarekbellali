var tableau = [];
var compteurfaux = 0;


//création du tableau
for( i = 0; i < 1000; i++){

    var bool;
    if(Math.round(Math.random()) === 0){
        bool = false;
    }
    else{
        bool = true;
    }

    tableau.push(bool);
}

//[true,false,true,true,true,false,..........]
//compter le nombre de faux et de vrai
for( i = 0; i < 1000; i++){
    if(tableau[i] === false){
        compteurfaux++;
    }
}

document.write("Dans le tableau il y a exactement " + compteurfaux.toString() + "faux <br>");
document.write("Dans le tableau il y a exactement " + (1000 - compteurfaux).toString() + "vrai");