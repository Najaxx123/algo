function makeSum(a, b) {
  const result = a + b
  return result
}
makeSum(2, 2)
makeSum(4, 2)
function addition(a, b) {
  const addition = a + b
  return addition
}
console.log(addition(2, 3));

function salutation(nom) {
  const salutation = "Bonjour " + nom
  return salutation
}
console.log(salutation("Alice"));

function estPair(nombre) {
  if (nombre === 0){
    const estPair = "True"
    return estPair
}
  else {
     const estPair = "False"
    return estPair
  }
}
console.log(estPair(4 % 2));
console.log(estPair(7 % 5));

function aireRectangle(a, b){
  const aireRectangle = a * b
  return aireRectangle
}
console.log(aireRectangle(5, 3));

function estMajuscule(chaine) {
  return chaine === chaine.toUpperCase();
}
console.log(estMajuscule("HELLO")); // Résultat attendu : true
console.log(estMajuscule("Hello")); // Résultat attendu : false


function maxDeuxNombres(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maxDeuxNombres(5, 10)); // Résultat attendu : 10


function difference(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}
console.log(difference(10, 3)); // Résultat attendu : 7



function convertirEnCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778



function estMajeur(age) {
  return age >= 18;
}
console.log(estMajeur(20)); // Résultat attendu : true
console.log(estMajeur(16)); // Résultat attendu : false



function maxTroisNombres(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7