const formHandler = document.querySelector('.intro__link');
const form = document.querySelector('.form-wrapper');
const closeFormIcon = document.getElementById('close-form');

function closeForm () {
    form.classList.remove('form-wrapper--active');
    document.body.classList.remove('no-overflow');
}

function openForm() {
    form.classList.add('form-wrapper--active');
    document.body.classList.add('no-overflow');
}

formHandler.addEventListener('click', openForm);

closeFormIcon.addEventListener('click', closeForm);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeForm();
    }
})

document.addEventListener('click', function(e) {
    if (e.target.className === 'form-wrapper form-wrapper--active') {
      closeForm();
    }
  })

const formName = document.getElementById('name');
const formNameError = document.getElementById('name-error');
const formNameLabel = document.getElementById('name-label');

formName.addEventListener('change', () => {
    var regEx = /^([^0-9]+|\d+)$/i;
    const name = formName.value;
    if (regEx.test(name)) {
        formName.classList.remove('error');
        formNameError.classList.remove('form-row__name-error--active');
        formNameLabel.classList.remove('label-error');
    } else {
        formNameError.innerHTML = 'Используйте только буквы'
        formNameError.classList.add('form-row__name-error--active');
        formName.classList.add('error');
        formNameLabel.classList.add('label-error');
    }
})

const formEmail = document.getElementById('email');
const formEmailError = document.getElementById('email-error');
const formEmailLabel = document.getElementById('email-label');

formEmail.addEventListener('change', () => {
    var regEx = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
    const email = formEmail.value;
    if (regEx.test(email)) {
        formEmail.classList.remove('error');
        formEmailError.classList.remove('form-row__name-error--active');
        formEmailLabel.classList.remove('label-error');
    } else {
        formEmailError.innerHTML = 'Некорректный email'
        formEmailError.classList.add('form-row__name-error--active');
        formEmail.classList.add('error');
        formEmailLabel.classList.add('label-error');
    }
})

const formCity = document.getElementById('city');
const formCityError = document.getElementById('city-error');
const formCityLabel = document.getElementById('city-label');

formCity.addEventListener('change', () => {
    var regEx = /^([^0-9]+|\d+)$/i;
    const city = formCity.value;
    if (regEx.test(city)) {
        formCity.classList.remove('error');
        formCityError.classList.remove('form-row__name-error--active');
        formCityLabel.classList.remove('label-error');
    } else {
        formCityError.innerHTML = 'Используйте только буквы'
        formCityError.classList.add('form-row__name-error--active');
        formCity.classList.add('error');
        formCityLabel.classList.add('label-error');
    }
})

