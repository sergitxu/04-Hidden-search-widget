const container = document.querySelector('.search');
const input = document.querySelector('.search__input');
const btn = document.querySelector('.search__button');

btn.addEventListener('click', () => {
    container.classList.toggle('search--opened');
    input.focus();
});