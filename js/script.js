const submitBtn = document.querySelector('.submit-button');
const iconError = document.querySelector('.icon-error');
const errorMsg = document.querySelector('.error-message');

const emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



if(submitBtn) {
    submitBtn.addEventListener('click', function() {
        const email = document.querySelector('.wrapper-left input');

        function setAlert() {
            alert("You are logged in!");
        }

        if(email.value.match(emailValid)) {
            iconError.style.display = 'none';
            errorMsg.style.display = 'none';
            email.style.border = '1px solid hsl(0, 36%, 70%)';
            submitBtn.style.marginBottom = '0';
            submitBtn.style.border = 'none';
            submitBtn.style.position = 'relative';
            submitBtn.style.left = '15px';

            setTimeout(setAlert, 500);
        }else {
            iconError.style.display = 'block';
            email.style.border = '2px solid red';
            submitBtn.style.border = '2px solid hsl(0, 36%, 70%)';
            submitBtn.style.marginBottom = '3px';
            submitBtn.style.position = '';
            submitBtn.style.left = 0;
            errorMsg.style.display = 'block';
        }

    });
}