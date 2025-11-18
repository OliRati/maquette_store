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
  const li = document.createElement('li');
  li.classList.add('menuItem');
  li.innerText = item.title;

  if (item.subMenu.length > 0) {
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('submenuItem');

    const innerUl = document.createElement('ul');
    item.subMenu.forEach((item) => {
      const innerLi = document.createElement('li');
      innerLi.innerText = item.title;
      innerUl.append(innerLi);
    });

    innerDiv.append(innerUl);
    li.append(innerDiv);
  };

  ul.append(li);
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
