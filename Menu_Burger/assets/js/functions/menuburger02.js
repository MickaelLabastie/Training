const burger = document.querySelector('.burger');
const bar = document.querySelector('.bar');

burger.addEventListener('click', () => {
    bar.classList.toggle('change');
});