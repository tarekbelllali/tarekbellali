var tableau = [];

for(i = 0; i < 10; i++){
    var chiffre = prompt("Veuillez entrer un nombre");
    chiffre = parseInt(chiffre);
    tableau.push(chiffre);
}

//utilisons le sort
//tableau.sort();
//var lepluspetit = tableau[0];
//var leplusgrand = tableau[tableau.length-1];




//[6,2,5,4,5,6,8,8,9,2]
var lepluspetit = tableau[0]; // lepluspetit = 2
var leplusgrand = tableau[0]; // leplusgrand = 9


for(i=1; i< tableau.length; i++){
    if(tableau[i] > leplusgrand){
        leplusgrand = tableau[i];
    }
    else if(tableau[i] < lepluspetit){
        lepluspetit = tableau[i];
    }
}

document.write("Le plus petit chiffre est " + lepluspetit.toString() + "<br>");
document.write("Le plus grand chiffre est " + leplusgrand.toString());