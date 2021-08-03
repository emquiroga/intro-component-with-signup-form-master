const form = document.getElementsByTagName('form')[0];

const fnameInput = document.getElementById('first-name');
const lnameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const pwdInput = document.getElementById('password');
const inputs = [fnameInput, lnameInput, emailInput, pwdInput];

//First name validation
fnameInput.addEventListener('input', function(e) {
    if (!fnameInput.validity.valid) {
        document.getElementById('error-msg-fname').textContent = `First name cannot be empty`;
        document.getElementById('icon-fname').className = '__icon';
    } else {
        document.getElementById('error-msg-fname').textContent = '';
        document.getElementById('icon-fname').className = '';
    }
});

//Last name validation
lnameInput.addEventListener('input', function(e) {
    if (!lnameInput.validity.valid) {
        document.getElementById('error-msg-lname').textContent = 'Last Name cannot be empty';
        document.getElementById('icon-lname').className = '__icon';
    } else {
        document.getElementById('error-msg-lname').textContent = '';
        document.getElementById('icon-lname').className = '';
    }
});

//Email validation
emailInput.addEventListener('input', function (e) {
    if(!emailInput.validity.valid) {
        document.getElementById('error-msg-email').textContent = 'Looks like this is not an email';
        document.getElementById('icon-email').className = '__icon';
    } else {
        document.getElementById('error-msg-email').textContent = '';
        document.getElementById('icon-email').className = '';
    }
});

//Password validation
pwdInput.addEventListener('input', function (e) { 
    if(!pwdInput.validity.valid) {
        document.getElementById('error-msg-pwd').textContent = 'Password cannot be empty'
        document.getElementById('icon-pwd').className = '__icon'
    } else {
        document.getElementById('error-msg-pwd').textContent = ''
        document.getElementById('icon-pwd').className = ''
    }
});

form.addEventListener('submit', function (e) {
    if (!fnameInput.validity.valid && 
        !lnameInput.validity.valid &&
        !emailInput.validity.valid &&
        !pwdInput.validity.valid)
        e.preventDefault;
});
