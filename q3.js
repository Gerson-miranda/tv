// Gerson Gabriel , Cauan coelho
function verificarVoto(idade){
    if (idade < 16 ){
        return "Não pode votar";
    }
    else if ((idade >= 16 && idade <=17 )|| idade > 70 ){
        return "Voto facultativo";
    }
    else if (idade >=18 && idade <=69){
        return "Voto facultativo ";
    }
}

console.log(verificarVoto(15))
console.log(verificarVoto(17))
console.log(verificarVoto(30))
console.log(verificarVoto(75))