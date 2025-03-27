// Gerson Gabriel , Cauan coelho
function verificarHorario(hora) {
    if (hora >= 8 && hora < 18) {
      return "Estabelecimento aberto";
    } else {
      return "Estabelecimento fechado";
    }
  }

console.log(verificarHorario(9));   
console.log(verificarHorario(18));  
console.log(verificarHorario(7)); 