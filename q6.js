// Gerson Gabriel , Cauan coelho
function  verificarConceito(nota){
    if (nota >= 9){
        return"Excelente ";
    }
    else if (nota >= 7){
        return "Bom";
    }
    else if (nota >= 5){
        return "Regular ";
    }
    else{
        return"Insuficiente";
    }
}

console.log(verificarConceito(9.5))
console.log(verificarConceito(7.8))
console.log(verificarConceito(5.5))
console.log(verificarConceito(4))