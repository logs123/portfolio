const themeBtn = document.querySelector('.theme__btn');
const themeCircle = document.querySelector('.theme__circle');
const headerToggleBtn = document.querySelector('.header__toggle');
const headerModal = document.querySelector('.header__modal');

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            themeCircle.classList.add('theme__circle--dark');
        } else {
            themeCircle.classList.remove('theme__circle--dark');
        }
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        themeCircle.classList.add('theme__circle--dark');
    }
}

function animateThemeBtn() {
    themeCircle.classList.add('theme__circle--animate');
}

function handleToggleTheme() {
    const circle = document.querySelector('.theme__circle');
    circle.classList.toggle('theme__circle--dark');

    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function handleToggleMenu() {
    let element = headerToggleBtn.lastElementChild;
    let display = getComputedStyle(element).display;
    element.style.display = display === "block" ? "none" : "block";
    Array.from(headerToggleBtn.children).forEach(child => child.classList.toggle('header__toggle--close'));

    headerModal.classList.toggle('header__modal--visible');
}

document.addEventListener('DOMContentLoaded', applySavedTheme);
window.requestAnimationFrame(animateThemeBtn);
themeBtn.addEventListener('click', handleToggleTheme);
headerToggleBtn.addEventListener('click', handleToggleMenu);