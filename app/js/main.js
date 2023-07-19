// Кнопка логин и закрыть
document.querySelector('.btn-enter').addEventListener('click', () => {
    document.querySelector('.form').classList.toggle('form-show');    
});
document.querySelector('.form__close').addEventListener('click', () => {
    document.querySelector('.form').classList.toggle('form-show');    
});

// Кнопки логина и регистрации
document.querySelector('.cta-register__register').addEventListener('click', () => {
    document.querySelector('.form-login').classList.toggle('form-login-show');
    document.querySelector('.form-registr').classList.toggle('form-registr-show');
});
document.querySelector('.cta-register__login').addEventListener('click', () => {
    document.querySelector('.form-login').classList.toggle('form-login-show');
    document.querySelector('.form-registr').classList.toggle('form-registr-show');
});