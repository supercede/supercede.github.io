const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const sections = document.querySelectorAll('section');
const menuNav = document.querySelector('nav .container ul');
const navItems = document.querySelectorAll('nav .container .nav-link');
const body = document.querySelector('body');
const loader = document.querySelector('.loader');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach((item) => item.classList.add('open'));
    console.log(navItems);

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach((item) => item.classList.remove('open'));

    showMenu = false;
  }
}

[...sections].forEach((section) =>
  section.addEventListener('click', () => {
    if (showMenu) {
      hamburger.classList.remove('open');
      menuNav.classList.remove('open');
      navItems.forEach((item) => item.classList.remove('open'));

      showMenu = false;
    }
  })
);

window.addEventListener('DOMContentLoaded', () => {
  body.classList.remove('loading');
  loader.style.display = 'none';

  const strings = [
    '',
    'Software Developer',
    'Technical Writer',
    'Music Afficionado',
    'Dad Joke Expert',
    'Football Manager Fiend',
  ];

  var typed = new Typed('.text-slider', {
    strings: strings,
    typeSpeed: 50,
    startDelay: 2000,
    loop: true,
    backDelay: 900,
    backSpeed: 30,
  });
});
