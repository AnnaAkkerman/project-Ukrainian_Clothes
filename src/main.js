const openMenu = document.querySelector('#button-open-menu');
const closeMenu = document.querySelector('#button-close-menu');

openMenu.addEventListener('click', () => {
  document.querySelector('.mob-menu').classList.toggle('is-open');
});

closeMenu.addEventListener('click', () => {
  document.querySelector('.mob-menu').classList.remove('is-open');
});
