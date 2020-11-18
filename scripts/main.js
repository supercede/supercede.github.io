const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const sections = document.querySelectorAll('section');
const menuNav = document.querySelector('nav .container ul');
console.log(menuNav);
const navItems = document.querySelectorAll('nav .container .nav-link');

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
