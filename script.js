function alterar(armario) {
  
    if (armario.classList.contains('livre')) {
        armario.
       
    classList.remove('livre');
        armario.classList.add('manutencao');
        armario.
       
    innerText = "Em manutenção";
      } 
     
    else if (armario.classList.contains('manutencao')) {
        armario.
       
    classList.remove('manutencao');
        armario.
       
    classList.add('bloqueado');
        armario.
       
    innerText = "Bloqueado";
      } 
     
    else if (armario.classList.contains('bloqueado')) {
        armario.
       
    classList.remove('bloqueado');
        armario.
       
    classList.add('livre');
        armario.
       
    innerText = "Livre";
      }
    }