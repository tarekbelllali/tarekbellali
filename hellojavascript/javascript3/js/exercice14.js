var a;
var b;
var c;
// demander A et B à l'usager
a = parseInt(prompt("Veuillez entrer le nombre A"));
b = parseInt(prompt("Veuillez entrer le nombre B"));
c = parseInt(prompt("Veuillez entrer le nombre C"));

if(a > b){
    if(a > c){
        console.log("Le plus grand est " + a);
    }
}
//est-ce que B est le plus grand ?
if(b > a){
    if(b > c){
        console.log("Le plus grand est " + b);
    }
}
//est-ce que C est le plus grand ?
if(c > a){
    if(c > b){
        console.log("Le plus grand est " + c);
    }
}


//est-ce que A est le plus petit ?
if(a < b){
    if(a < c){
        console.log("Le plus petit est " + a);
    }
}
//est-ce que B est le plus petit ?
if(b < a){
    if(b < c){
        console.log("Le plus petit est " + b);
    }
}
//est-ce que C est le plus petit ?
if(c < a){
    if(c < b){
        console.log("Le plus petit est " + c);
    }
}




