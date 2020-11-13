var indiceDePollution;
var listeA;
var listeB;
var listeC;

//génère un chiffre au hazard entre 0 et 1
indiceDePollution = Math.random();

indiceDePollution = indiceDePollution.toFixed(2);

document.write("l'indice de pollution est égale à : " + indiceDePollution + "<br>");


//si indice > 0.31 on averti la liste A
if(indiceDePollution > 0.04 && indiceDePollution < 0.31){
    document.write("Normal");
}
else if(indiceDePollution >= 0.31 && indiceDePollution < 0.40){
    document.write("Avertir la liste A");
}
else if( indiceDePollution >= 0.40 && indiceDePollution < 0.50){
    document.write("Avertir la liste A et B");
}
else if(indiceDePollution > 0.50){
    document.write("Avertir la liste A et B et C");
}
else{
    document.write("Valeur impossible");
}