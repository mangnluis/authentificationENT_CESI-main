// Configuration - MODIFIEZ VOS IDENTIFIANTS ICI
const CONFIG = {
  username: "A CHANGER",
  password: "A CHANGER"
};

window.addEventListener('load', function() {
  setTimeout(() => {
    try {
      const currentUrl = window.location.href;
      
      if (!currentUrl.includes('sts.viacesi.fr')) {
        handleFirstPage();
      }
      else if (currentUrl.includes('sts.viacesi.fr/adfs/ls/')) {
        handleLoginPage();
      }
      
    } catch (error) {
      console.error('Erreur auto-fill:', error);
    }
  }, 1000);
});

function handleFirstPage() {
  const textInput = document.querySelector('input[type="text"]');
  
  if (textInput) {
    textInput.value = 'a@viacesi.fr';
    textInput.dispatchEvent(new Event('input', { bubbles: true }));
    textInput.dispatchEvent(new Event('change', { bubbles: true }));
    
    
    const submitButton = document.querySelector('input[type="submit"], button[type="submit"], button') 
                      || document.querySelector('button');
    
    if (submitButton) {
      setTimeout(() => {
        submitButton.click();
      }, 500);
    }
  }
}

function handleLoginPage() {
  const usernameInput = document.querySelector('#userNameInput');
  const passwordInput = document.querySelector('#passwordInput');
  
  if (usernameInput && passwordInput) {
    usernameInput.value = CONFIG.username;
    usernameInput.dispatchEvent(new Event('input', { bubbles: true }));
    usernameInput.dispatchEvent(new Event('change', { bubbles: true }));
    
    passwordInput.value = CONFIG.password;
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
    passwordInput.dispatchEvent(new Event('change', { bubbles: true }));
    
    
    const loginButton = document.querySelector('input[type="submit"], button[type="submit"]') 
                     || document.querySelector('#submitButton')
                     || document.querySelector('button');
    
    if (loginButton) {
      setTimeout(() => {
        loginButton.click();
        console.log('REUSSI BRAVO LOUIS');
      }, 500);
    }
  }
}
