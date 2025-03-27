// Gerson Gabriel , Cauan coelho
function verificarEmprestimo(idade,renda){
    if (idade >= 18 && renda >= 2000) {
        return "Empréstimo aprovado";
      } else {
        return "Empréstimo negado";
      }
}

console.log(verificarEmprestimo(25,3000));
console.log(verificarEmprestimo(17,2500));
console.log(verificarEmprestimo(30,1500));