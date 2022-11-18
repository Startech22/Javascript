// 1
const peso = prompt('Digite seu peso:');
const altura = prompt('Digite sua altura:');
const imc = (peso/(altura**2)).toFixed(2);
let obeso = false;
if(imc >= 30){
    obeso = true;
}
console.log(` O valor do IMC para ${peso} quilos e ${altura} metros é de ${imc}`);


// 2
let numero = prompt("Digite o numero:")
while(numero != 1) {
    if (numero % 2 == 0){
         numero = numero/2
     } else {
         numero = (3* numero +1)
     }
     console.log(numero)


// 3
let Chico = 1.50;
let Ze = 1.10;

while  (Chico > Ze) {
    Chico += 0.02;
    Ze += 0.03;
    console.log(`Altura do Chico = ${Chico.toFixed(2)}   Altura do Ze = ${Ze.toFixed(2)}`)