// Gerson Gabriel , Cauan coelho
function aplicarDesconto(preco){
    if (preco > 100){
        return preco * 0.8
;    }
else if (preco >= 50 && preco <=100){
    return preco * 0.9;
}
else{
    return preco;
}
}

console.log(aplicarDesconto(120));
console.log(aplicarDesconto(75));
console.log(aplicarDesconto(30));