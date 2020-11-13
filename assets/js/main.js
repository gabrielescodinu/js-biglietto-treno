// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
var chilometers = prompt("Inserisci il numero di chilometri")

// l’età del passeggero.
var age = prompt("Inserisci la tua età")

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km),
if (age > 65) {
  alert ("lei è over 65");
}
if (age < 18) {
  alert ("lei è minorenne");
}

// ma va applicato uno sconto del 20% per i minorenni
// var minor = ((chilometers * 0.21) * 20) / 100);
// e del 40% per gli over 65.
// var over65 = ((chilometers * 0.21) * 40) / 100);

// document.getElementById('price').innerHTML = "Il prezzo del biglietto è di " + chilometers * 0.21 + " euro.";
document.getElementById('price').innerHTML = "Il prezzo del biglietto è di " + chilometers * 0.21 + " euro.";
