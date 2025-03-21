const headerToggleBtn = document.querySelector('.header__toggle');
const headerModal = document.querySelector('.header__modal');

function handleToggleMenu() {
    let element = headerToggleBtn.lastElementChild;
    let display = getComputedStyle(element).display;
    element.style.display = display === "block" ? "none" : "block";
    Array.from(headerToggleBtn.children).forEach(child => child.classList.toggle('header__toggle--close'));

    headerModal.classList.toggle('header__modal--visible');
}

headerToggleBtn.addEventListener('click', handleToggleMenu);