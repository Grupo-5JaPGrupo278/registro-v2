const FORM = document.getElementById('formulary');
const REGBTN = document.getElementById('rgn-button');
const TERMS = document.getElementById('terminos');
const TERMSFDBK = document.getElementById('terms-feedback');
const TERMSBTN = document.getElementById('terms-btn');
const TERMSLETTERS = document.getElementById('popup-terms');
const PW1 = document.getElementById('password1');
const PW2 = document.getElementById('password2');
const invalidpw1 = document.getElementById('invalidfeedbackpw1');

PW2.addEventListener('input', () => {
    PW1.value === PW2.value ? PW2.setCustomValidity("") 
    : PW2.setCustomValidity("Las contraseñas no coinciden")
})
FORM.addEventListener('submit', () => {
    if (PW1.value.length > 0){
        if (PW1.value.length >= 6 && PW1.value.length <= 12) PW1.setCustomValidity("")
        else invalidpw1.textContent = "La contraseña debe ser entre 6 y 12 caracteres";
    } else {
        invalidpw1.textContent = "Por favor, ingresa una contraseña.";
    }

    if (!TERMS.checked){
        TERMSFDBK.classList.add('show-feedback');
        TERMSBTN.style.color = 'red';
        TERMSLETTERS.style.color = 'red';
    } else {
        TERMSBTN.style.color = 'blue';
        TERMSLETTERS.style.color = 'green';
        TERMSFDBK.classList.remove('show-feedback');
    }
    
});
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
 
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()