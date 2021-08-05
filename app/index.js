const form = document.getElementsByTagName('form')[0];
const firstName = document.getElementById('first-name');
const spanFirst = document.getElementById('error-msg-fname');
const lastName = document.getElementById('last-name');
const spanLast = document.getElementById('error-msg-lname');
const email = document.getElementById('email');
const spanEmail = document.getElementById('error-msg-email');
const password = document.getElementById('password');
const spanPass = document.getElementById('error-msg-pwd');

//Adding error classes when submit
form.addEventListener('submit', function (e) {
    if (!firstName.validity.valid) {
        firstName.classList.add('error');
        firstName.nextElementSibling.classList.add('__icon');
        spanFirst.innerHTML = `${firstName.name} cannot be empty`;
        e.preventDefault();
    }
    if (!lastName.validity.valid) {
        lastName.classList.add('error');
        lastName.nextElementSibling.classList.add('__icon');
        spanLast.innerHTML = `${lastName.name} cannot be empty`;
        e.preventDefault();
    }
    if (!email.validity.valid) {
        email.classList.add('error');
        email.nextElementSibling.classList.add('__icon');
        spanEmail.innerHTML = 'Looks like this is not an email';
        e.preventDefault();
    }
    if (!password.validity.valid) {
        password.classList.add('error');
        password.nextElementSibling.classList.add('__icon');
        spanPass.innerHTML = `${password.name} cannot be empty`;
        e.preventDefault();
    }
});

//Checking validity when input changes its value, after submit
firstName.addEventListener('input', function () {
    if (firstName.validity.valid) {
        firstName.classList.remove('error')//Removes the class error if valid
        firstName.nextElementSibling.classList.remove('__icon'); //Removes alert icon
        spanFirst.innerHTML = ''; //Clean the span content
    }
});
lastName.addEventListener('input', function () {
    if (lastName.validity.valid) {
        lastName.classList.remove('error')//Removes the class error if valid
        lastName.nextElementSibling.classList.remove('__icon'); //Removes alert icon
        spanLast.innerHTML = ''; //Clean the span content
    }
});
email.addEventListener('input', function () {
    if (email.validity.valid) {
        email.classList.remove('error')//Removes the class error if valid
        email.nextElementSibling.classList.remove('__icon'); //Removes alert icon
        spanEmail.innerHTML = ''; //Clean the span content
    }
});
password.addEventListener('input', function () {
    if (password.validity.valid) {
        password.classList.remove('error')//Removes the class error if valid
        password.nextElementSibling.classList.remove('__icon'); //Removes alert icon
        spanPass.innerHTML = ''; //Clean the span content
    }
});