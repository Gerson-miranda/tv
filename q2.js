// Gerson Gabriel , Cauan coelho
function somaPares (inicio , fim ){
 let soma = 0;

 if ( inicio % 2 !== 0 ){
    inicio++;
 }
 for (let i = inicio ; i <= fim; i +=2){
    soma +=i;
    return soma;
 }
}

console.log(somaPares(1,10));
console.log(somaPares(3,7));
console.log(somaPares(2,2));