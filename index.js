// Event Listener für das erste Formular (form-1)
const firstEmailValidation = document.querySelector('.submit-1');
firstEmailValidation.addEventListener('click', checkFirstEmail);

function checkFirstEmail(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite
    const firstEmailPattern = document.querySelector('.email-1').pattern;
    const firstUserEmail = document.querySelector('.email-1').value;

    if(firstUserEmail.match(firstEmailPattern)) {
        openPopup(); // Popup öffnen bei erfolgreicher Eingabe
    } else {
        const firstErrorMessage = document.createElement('div');
        const message = document.createTextNode('Please check your email');
        firstErrorMessage.appendChild(message);

        firstErrorMessage.classList.add("error-msg");

        const firstForm = document.querySelector('.form-1');
        firstForm.appendChild(firstErrorMessage);

        const firstErrorBorder = document.querySelector('.email-1');
        firstErrorBorder.style.border = '0.625px solid #EF4877';
        firstErrorBorder.style.boxShadow = '2px 3px 6px rgba(0, 0, 0, 0.15925)';
        firstErrorBorder.style.borderRadius = '3.125px';
    }
}

// Event Listener für das zweite Formular (form-2)
const secondEmailValidation = document.querySelector('.submit-2');
secondEmailValidation.addEventListener('click', checkSecondEmail);

function checkSecondEmail(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite
    const secondEmailPattern = document.querySelector('.email-2').pattern;
    const secondUserEmail = document.querySelector('.email-2').value;

    if(secondUserEmail.match(secondEmailPattern)) {
        openPopup(); // Popup öffnen bei erfolgreicher Eingabe
    } else {
        const secondErrorMessage = document.createElement('div');
        const messageTwo = document.createTextNode('Please check your email');
        secondErrorMessage.appendChild(messageTwo);

        secondErrorMessage.classList.add("error-msg", "position");

        const secondForm = document.querySelector('.form-2');
        secondForm.appendChild(secondErrorMessage);

        const secondErrorBorder = document.querySelector('.email-2');
        secondErrorBorder.style.border = '0.625px solid #EF4877';
        secondErrorBorder.style.boxShadow = '2px 3px 6px rgba(0, 0, 0, 0.15925)';
        secondErrorBorder.style.borderRadius = '3.125px';
    }
}

// Popup-Funktionen
function openPopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';

    // Seite neu laden
    location.reload(); 
}
