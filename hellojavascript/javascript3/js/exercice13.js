var a;
var b;
// demander A et B à l'usager
a = parseInt(prompt("Veuillez entrer le nombre A"));
b = parseInt(prompt("Veuillez entrer le nombre B"));

if(a > b){
    console.log("Le plus petit est " + b);
    console.log("Le plus grand est " + a);
}
else if(b > a){
    console.log("Le plus grand est " + a);
    console.log("Le plus grand est " + b);
}
else{
    console.log("erreur, les deux nombres sont égaux !")
}



