// Gerson Gabriel , Cauan coelho
function verificarDivisivilidade ( numero){
    if (numero % 3 === 0 && numero % 5 === 0){
        return "Divisível por 3 e 5 ";
    }
    else if ( numero % 3 === 0 ){
        return "Divisível por 3"
    }
    else if (numero % 5 === 0 ){
        return "Divisível por 5"
    }
    else{
        return "Não é divisível por 3 nem por 5";
    }
}

console.log(verificarDivisivilidade(15));
console.log(verificarDivisivilidade(9));
console.log(verificarDivisivilidade(10));
console.log(verificarDivisivilidade(7));