// Gerson Gabriel , Cauan coelho
function categoriaNadador(idade) {

    if (idade <= 10) {
      return "Infantil";
    } else if (idade >= 11 && idade <= 17) {
      return "Juvenil";
    } else {
      return "Adulto";
    }
}

console.log(categoriaNadador(8));   
console.log(categoriaNadador(14));  
console.log(categoriaNadador(18));