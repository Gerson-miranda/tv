// Gerson Gabriel , Cauan coelho
function calcularIMC(peso,altura){
    const imc = peso/ (altura*altura);

    if (imc < 18.5){
        return "Abaixo do peso "
    }
    else if (imc >=18.5 && imc <=24.9){
        return "Peso normal"
    }
    else if ( imc >= 25 && imc <= 29.9){
        return "Sobepeso";
    }
    else{
        return " obesidade";
    }
}

console.log(calcularIMC(60,1.7))
console.log(calcularIMC(50,1.7))
console.log(calcularIMC(75,1.7))
console.log(calcularIMC(95,1.7))