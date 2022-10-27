const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();


    const firstname = form ['first_name'].value;
    const lastname = form ['last_name'].value;
    const email = form ['email'].value;
    const password = form ['password'].value;

    if (firstname === '') {
        addErrorTo('first_name', 'First Name cannot be empty');
    }
    if (lastname === '') {
        addErrorTo('last_name', 'Last Name cannot be empty');
    }

    if ((email ==='') && (!isValid(email))) {
        addErrorTo('email', 'Looks like this is not an email');
    }
    if (password === '') {
        addErrorTo('password', 'Password cannot be empty');
    }

});


function addErrorTo(field, message){

    const span = form[field].parentNode.querySelector('span');
    span.innerText = message;
    span.style.display = 'block';
}

function isValid (email){
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return re.test(String(email).toLowerCase());
    
}