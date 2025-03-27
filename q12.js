// Gerson Gabriel , Cauan coelho
function avaliarDesempenho(nota){
    if (nota >= 9){
        return "Excelente";
    }
    else if (nota >=7){
        return "Bom"
    }
    else if (nota >= 5){
        return "Regular "
    }
    else{
        return "Ruim"
    }
}

console.log(avaliarDesempenho(9.2));
console.log(avaliarDesempenho(7.5));
console.log(avaliarDesempenho(5.8));
console.log(avaliarDesempenho(4));