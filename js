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