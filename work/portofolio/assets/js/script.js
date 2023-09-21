// Toggle class active

const navMenu = document.querySelector('.nav-menu');

// ketika  hamburger-menu diklik 
document.querySelector('#hamburger-menu').onclick = () => {
  navMenu.classList.toggle('active');
};

// KLik untuk menutup sidevarmenu

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target))
    navMenu.classList.remove('active');
});