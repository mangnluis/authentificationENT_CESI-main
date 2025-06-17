// Attendre que la page soit complètement chargée
window.addEventListener('load', function() {
  // Petite pause pour s'assurer que tout est chargé
  setTimeout(() => {
    try {
      // Trouver le premier input de type text
      const textInput = document.querySelector('input[type="text"]');
      
      if (textInput) {
        // Remplir avec l'email
        textInput.value = 'a@viacesi.fr';
        textInput.dispatchEvent(new Event('input', { bubbles: true }));
        textInput.dispatchEvent(new Event('change', { bubbles: true }));
        
        console.log('Email rempli: a@viacesi.fr');
        
        // Chercher le bouton submit
        const submitButton = document.querySelector('input[type="submit"], button[type="submit"], button:contains("Submit")') 
                          || document.querySelector('button');
        
        if (submitButton) {
          // Cliquer après un petit délai
          setTimeout(() => {
            submitButton.click();
            console.log('Formulaire soumis');
          }, 500);
        }
      }
    } catch (error) {
      console.error('Erreur auto-fill:', error);
    }
  }, 1000);
});