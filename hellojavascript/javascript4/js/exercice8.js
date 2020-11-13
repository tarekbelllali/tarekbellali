var temperatureEnCelcius = 0;

for (var i=-40; i<=40; i+=5) {
    tempEnCelcius=(5/9)*(i- 32);
    document.write( " la valeur de  " + i + " Fahrenheit est " + tempEnCelcius +" en Celsius" );
    document.write("<br>");
}
