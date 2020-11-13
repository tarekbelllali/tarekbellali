var chiffre = 1;
var compteurPositif = 0;
var compteurNegatif = 0;

while(chiffre !== 0) {
    chiffre = parseInt(prompt("Entrez un chiffre"));

    if (chiffre > 0) {
        compteurPositif++;
    } else if (chiffre < 0) {
        compteurNegatif++;
    }
}


document.write("L'usager a entré " + compteurPositif + " chiffres positifs.");
document.write("L'usager a entré " + compteurNegatif + " chiffres négatifs.");
