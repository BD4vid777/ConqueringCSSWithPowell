// const navToggle = document.querySelector(".nav-toggle");
// const nav = document.getElementsByClassName('.nav__list');

// navToggle.addEventListener('click', () => { nav.classList.toggle('nav-visible');
// })

function myFunction(x) {
    x.classList.toggle("change");
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('nav-visible');
}
