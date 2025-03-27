// Gerson Gabriel , Cauan coelho
function verificarTipoCaractere(caractere) {
    const vogais = "aeiouAEIOU";
  
    if (vogais.includes(caractere)) {
      return "Vogal";
    } else if (caractere.match(/[a-zA-Z]/)) {
      return "Consoante";
    } else if (caractere.match(/[0-9]/)) {
      return "Número";
    } else {
      return "Outro caractere";
    }
  }

  console.log(verificarTipoCaractere("a")); 
  console.log(verificarTipoCaractere("B")); 
  console.log(verificarTipoCaractere("3")); 
  console.log(verificarTipoCaractere("@"));