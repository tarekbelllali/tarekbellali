// Question 3 : Création tableau avec nombres aléatoire et retour de confirmation de réponse

//Nombres aléatoires

var tabChance = [];
var nombre
var RetourNombre

for(i=0; i<100 ;i++){
    randnumero =  Math.floor(Math.random() * 200);
    tabChance.push(randnumero);
}

// tableau

for(i=0; i<tabChance.length; i++){
    document.write(tabChance[i]);
    document.write("<br>");
}

// Nombre à saisir par l'usager

nombre = parseInt(prompt("Entrez un chiffre")); {
resultat = nombre>=1 && nombre<=200;}

// Confirmer le nombre de l'usager


if (tabChance.indexOf(resultat) === nombre) {
    console.log("element est dans le tableau ="+ nombre);
}
else {
    console.log("element n'est pas dans le tableau="+ nombre);
}

