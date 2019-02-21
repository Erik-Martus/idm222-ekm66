const hamburg = document.getElementById('burgWrap');
const menu = document.getElementById('menu');

console.log(menu.classList);

console.log(menu.style.display);
console.log(document.getElementById('menu').style.display);

const toggleMenu = () => {
  console.log('toggleMenu')
  if (menu.classList.contains('menuShow') === true) {
    menu.classList.add('menuHidden');
    menu.classList.remove('menuShow');
    menu.setAttribute('aria-hidden', 'true');
  } else {
    menu.classList.add('menuShow');
    menu.classList.remove('menuHidden');
    menu.setAttribute("aria-hidden", 'false')
  }
  // if (menu.style.display === 'grid') {
  //   menu.style.display = 'none';
  // }
  // else {
  //   menu.style.display = 'grid';
  // }
}

hamburg.addEventListener('click', toggleMenu, false);