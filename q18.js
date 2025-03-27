// Gerson Gabriel , Cauan coelho
function determinarFaseDoDia(hora) {
    if (hora >= 5 && hora <= 11) {
      return "Manhã";
    } else if (hora >= 12 && hora <= 17) {
      return "Tarde";
    } else if (hora >= 18 && hora <= 23) {
      return "Noite";
    } else if (hora >= 0 && hora < 5) {
      return "Madrugada";
    } else {
      return "Hora inválida";
    }
  }

  console.log(determinarFaseDoDia(6));   
  console.log(determinarFaseDoDia(13));  
  console.log(determinarFaseDoDia(21));  
  console.log(determinarFaseDoDia(3));   
  console.log(determinarFaseDoDia(25));