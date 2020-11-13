var reponse;

var age = prompt("Entrez un âge 16 à 120");
var sexe = prompt("Entrez un sexe M ou F");

//mes données sont valide je peux donc continuer mon programme
if (age >= 16 && age <= 25) {
    if (sexe === "fille") {
        reponse = 2;
    } else {
        reponse = 5;
    }
}
    //si tu es vieux
else {
    if (sexe === "garçon") {
        reponse = 3;
    } else {
        reponse = 2;
    }
}

//valider l'age
if(age < 16 || age > 120){
    reponse = "age invalide"
}
else if(sexe !== "M" && sexe !== "F"){
    reponse = "sexe invalide"
}

document.write("<h1 style='color: magenta'>"+reponse+"</h1>");
