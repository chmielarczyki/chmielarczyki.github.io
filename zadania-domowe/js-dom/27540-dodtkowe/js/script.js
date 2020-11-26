let newsletterForm = document.getElementById('newsletter-form');

const validate = (event) => {


    event.preventDefault();

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz swoje imie i nazwisko';
        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz adres E-mail";
        errors.appendChild(liError);
    }
    
    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = "Adres E-mail musi zawierać @";
        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Zaznacz zgode 1';
        errors.appendChild(liError);
    }

    if (errors.children.lenght > 0 ) {
        event.preventDefault();
    }


    let errorsList = document.getElementsByClassName('err');

    // console.log(errorsList);

    for (let err of errorsList) {
        console.log(err);
    //     if (errorsList[0] === '') {
            let liError = document.createElement('li');
            let label = document.querySelector(`[for=${err.id}]`)
            liError.innerText = `Zle uzupełniono pole: ${label.innerText}`;
            errors.appendChild(liError);
    //     }
        
    }

}




let allAgreeChx = document.getElementById('all-agree');

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

allAgreeChx.addEventListener('click', allAgree);
newsletterForm.addEventListener('submit', validate);