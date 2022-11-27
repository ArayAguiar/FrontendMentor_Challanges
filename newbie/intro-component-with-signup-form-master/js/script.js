const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();


    const firstname = form ['first_name'].value;
    const lastname = form ['last_name'].value;
    const email = form ['email'].value;
    const password = form ['password'].value;

    if (firstname === '') {
        addErrorTo('first_name', 'First Name cannot be empty');
    } else {
        removeErrorFrom('first_name');
    }
    
    if (lastname === '') {
        addErrorTo('last_name', 'Last Name cannot be empty');
    } else {
        removeErrorFrom('last_name');
    }

    if (email ==='') {
        addErrorTo('email', 'Email is required');
    }else if (!isValid(email)) {
        addErrorTo('email', 'Looks like this is not an email');
    }else {
        removeErrorFrom('email');
    }

    if (password === '') {
        addErrorTo('password', 'Password cannot be empty');
    } else {
        removeErrorFrom('password');
    }

    // console.log(firstname, lastname, email, password);

});


function addErrorTo(field, message){
    const input = form[field].parentNode;
    const span = input.querySelector('span');

    input.classList.add('error');
    span.innerText = message;
    span.style.display = 'block';
}

function removeErrorFrom(field) {
    const input = form[field].parentNode;
    const span = input.querySelector('span');
    
    span.style.display = 'none';
    input.classList.remove('error');
}

function isValid (email){
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return re.test(String(email).toLowerCase());
    
}