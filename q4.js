// Gerson Gabriel , Cauan coelho
function faixaEtaria (idade ){
    if (idade < 12 ){
        return "Criança";
    }
    else if (idade  >= 12 && idade <= 17 ){
        return "Adolescente";
    }
    else if (idade >=18 && idade <=59 ){
        return "Adulto";
    }
    else{
        return "Idoso";
    }
}

console.log(faixaEtaria(8));
console.log(faixaEtaria(14));
console.log(faixaEtaria(30));
console.log(faixaEtaria(65));