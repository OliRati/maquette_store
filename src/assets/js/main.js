import '../css/style.css'
import { menuContent } from '../js/menuContent.js'

//
// Embla carousel
//

import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

const emblaNode = document.querySelector('.embla');
const options = { loop: true };
const plugins = [Autoplay()];
const emblaApi = EmblaCarousel(emblaNode, options, plugins);

console.log(emblaApi.slideNodes()) // Access API

//
// Menu creation from tab
//

const menu = document.querySelector('.menu');

const ul = document.createElement('ul');

menuContent.forEach((item) => {
  const div = document.createElement('div');
  let caret;

  div.classList.add('menuItem');
  div.innerText = item.title;

  if (item.subMenu && item.subMenu.length) {
    caret = document.createElement('i');
    caret.classList.add('fa-solid', 'fa-caret-up');
    div.append(caret);
  }

  menu.append(div);

  if (item.subMenu.length > 0) {
    const ul = document.createElement('ul');
    ul.classList.add('submenuItem');

    item.subMenu.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = item.title;
      ul.append(li);
    });

    menu.append(ul);

    div.addEventListener('click', () => {
      console.log('Menu Clicked ' + item.title);

      let opening = ul.style.display === 'none';

      ul.style.display === 'block';

      if (opening) {
        ul.classList.add('openSubMenu');
        caret.classList.remove('fa-caret-down');
        caret.classList.add('fa-caret-up');
      } else {
        ul.classList.add('closeSubMenu');
        caret.classList.remove('fa-caret-up');
        caret.classList.add('fa-caret-down');
      }

      // Div needs to be visible in order the animation could be seen
      ul.style.display = 'block';

      setTimeout(() => {
        if (opening) {
          ul.classList.remove('openSubMenu');
        } else {
          ul.style.display = 'none';
          ul.classList.remove('closeSubMenu');
        }
      }, 300);

    });
  };
});

menu.append(ul);

/*
 * Hamburger Menu switch
 */

const menuContainer = document.querySelector('.menuContainer');

const hamburger = document.getElementById('hamburger');
let toggleHamburger = false;
hamburger.addEventListener('click', () => {
  toggleHamburger = !toggleHamburger;

  const i = hamburger.firstElementChild;
  if (toggleHamburger) {
    i.classList.remove('fa-bars');
    i.classList.add('fa-xmark');
    menu.classList.add('showMenu');
    menuContainer.classList.add('menuContainerFullscreen');
  } else {
    i.classList.add('fa-bars');
    i.classList.remove('fa-xmark');
    menu.classList.remove('showMenu');
    menuContainer.classList.remove('menuContainerFullscreen');
  }

});
