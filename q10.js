// Gerson Gabriel , Cauan coelho
function categoriaMotorista(idade){
    if (idade <18){
        return "Não pode dirigir";
    }
    else if (idade <=65){
        return "pode dirigir ";
    }
    else{
        return"pode dirigir com avaliação médica";
    }
}

console.log(categoriaMotorista(16));
console.log(categoriaMotorista(30));
console.log(categoriaMotorista(70));