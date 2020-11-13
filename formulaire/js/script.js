function validerMonFormulaire(){

    //aller chercher l'input qu'on veut valider

    let theGlaceChoisi = document.getElementById("InputList").value;

    //brisk/arizona/nestea

    let formulaireEstValide=false;


    if (theGlaceChoisi === "brisk") {
        formulaireEstValide = true;
    }

    else if (theGlaceChoisi=== "nestea") {
        formulaireEstValide = true;
}
    else if (theGlaceChoisi=== "Arizona") {
        formulaireEstValide = true;
    }

    if(!formulaireEstValide) {
        alert( "veuillez vous limiter aux marques");
    }

    else {
        alert( " Formulaire envoyé avec succés")
    }

     return formulaireEstValide;
}

