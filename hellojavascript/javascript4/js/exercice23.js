var nombre = prompt("Entrex un nombre");

var bonjour = "bonjour";


for(i=0; i < nombre.length; i++){
    document.write(nombre[i]);
    document.write("<br>");
}

document.write("---------");
document.write("<br>");

for(i = nombre.length; i >= 0; i--){
    document.write(nombre[i]);
    document.write("<br>");
}

