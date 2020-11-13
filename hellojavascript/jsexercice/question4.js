
// Question 4 : Création de classe et instanciation

class MonnaieVirtuelle {
    constructor(nomMonnaie, valeurEnUSD, actif, actifUSD) {
        this.nomMonnaie  = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif       = actif;
        this.actifUSD    = actifUSD;
    }
    afficherportefeuille(){
        let textAAfficher= (this.valeurEnUSD + this.actif).toString();
        document.write(textAAfficher);
    }
}

class Portefeuille {
    constructor(nomProprietaire, tableauMonnaie) {
        this.nomProprietaire  = nomProprietaire;
        this.tableauMonnaie   = tableauMonnaie;
    }

}

function ValeurDuPortefeuille(bitcoin,bitcoin){
    return bitcoin;
}



let bitcoin = new MonnaieVirtuelle ( "Bitcoin", 9730, 6);
let ethereum = new MonnaieVirtuelle ("Ethereum", 194, 20);
let litecoin = new MonnaieVirtuelle ("Litecoin", 58, 10 );


let portf = new Portefeuille( "Shany Carle", "MonnaieVirtuelle" );


portf.afficherportefeuille();

