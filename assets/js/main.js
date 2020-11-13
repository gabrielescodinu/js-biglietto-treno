// number of kilometers
var kilometers = prompt("Inserisca il numero di chilometri");

// passenger age
var age = prompt("Inserisca la sua età");

// ticket price (0.21 € for km)
var x = 0;

// over 65 discount 40%
if (age > 65) {
  x = (((kilometers * 0.21) * 60) / 100);
}
// under 18 discount 20%
else if (age < 18) {
  x = (((kilometers * 0.21) * 80) / 100);
}
// between 18 and 65 years old
else {
  x = kilometers * 0.21;
}

console.log(x);

// final ticket price
document.getElementById('price').innerHTML = "Il prezzo del suo biglietto è di " + x + " euro.";
