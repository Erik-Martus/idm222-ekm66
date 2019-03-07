const hamburg = document.getElementById('burgWrap');
const menu = document.getElementById('menu');

const body = document.getElementById('body');
console.log(body);

const toggleMenu = () => {
  console.log('toggleMenu')
  if (menu.classList.contains('menuShow') === true) {
    menu.classList.add('menuHidden');
    menu.classList.remove('menuShow');
    body.classList.remove('noScroll');
    window.setTimeout(() => {
      menu.setAttribute('aria-hidden', 'true');
      menu.hidden = "true";
      console.log('timeout');
    }, 300)
  } else {
    menu.classList.add('menuShow');
    menu.classList.remove('menuHidden');
    body.classList.add('noScroll');
    menu.setAttribute("aria-hidden", 'false')
    menu.hidden = "";
  }
  // if (menu.style.display === 'grid') {
  //   menu.style.display = 'none';
  // }
  // else {
  //   menu.style.display = 'grid';
  // }
}

hamburg.addEventListener('click', toggleMenu, false);