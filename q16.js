// Gerson Gabriel , Cauan coelho
function calcularImposto(salario) {
    if (salario <= 2000) {
      return "Isento";
    } else if (salario <= 5000) {
      return "10% de imposto";
    } else {
      return "20% de imposto";
    }
  }

console.log(calcularImposto(1800)); 
console.log(calcularImposto(3500)); 
console.log(calcularImposto(6000));