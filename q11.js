// Gerson Gabriel , Cauan coelho
function verificarSenha(senha){
    if(senha === "Admin123"){
        return "senha correta";
    }
    else{
        return"Senha incorreta";
    }
}

console.log(verificarSenha("Admin123"));
console.log(verificarSenha("dmin123"));
console.log(verificarSenha("123456"));