// DOM starts
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const formElements = document.getElementsByClassName('formHeight')
const warningTextElements = document.getElementsByClassName('warningTxt')
const formDiv = document.getElementsByClassName('form-group')
// DOM ends


// checks if the mail format is valid
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// checks input changes
firstname.addEventListener('input', reset)
lastname.addEventListener('input', reset)
email.addEventListener('input', reset)
password.addEventListener('input', reset)


// resets the error colors and removes error text with any new input written
function reset() {
    for (let i=0; i < formElements.length; i++) {
        formDiv[i].classList.remove('borderWarning')
        formElements[i].classList.remove('svgImage')
        warningTextElements[i].innerHTML = ''
    }
}


// claim button checks if the form is correctly filled
function submitForm() {
    for (let i=0; i < formElements.length; i++) {
        
        // checks the mail field, if empty, gives error message
        if (formElements[i].value == '' && i == 2) {
            warningTextElements[i].innerHTML = `Looks like this is not an email`;
            formElements[i].placeholder = 'email@example/com'
            formDiv[i].classList.add('borderWarning');
            formElements[i].classList.add('svgImage');
        }

        // gives error message as `[field name] cannot be empty` 
        else if (formElements[i].value == '') {
            warningTextElements[i].innerHTML = `${formElements[i].placeholder} cannot be empty`;
            formElements[i].classList.add('svgImage');
            formDiv[i].classList.add('borderWarning')
        }

        // checks mailFormat, if not valid, gives an error message
        else if (i == 2 && !formElements[i].value.match(mailFormat)) {
            warningTextElements[i].innerHTML = `Looks like this is not an email`;
            formElements[i].placeholder = 'email@example/com'
            formDiv[i].classList.add('borderWarning');
            formElements[i].classList.add('svgImage');
        }

        // if all iz well, runs below function
        else {
            submitLast();
        }
    }
}


// if every thing is on the track, displays hidden congrats message
function submitLast() {
    document.getElementById('leftPanel').classList.add('d-none');
    document.getElementById('rightPanel').classList.add('d-none');
    document.getElementById('congratsTxt').classList.remove('d-none');
}

