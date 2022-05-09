'use strict';
const smoothScroll = () => {
  const mousBottom = document.querySelector('a[href="#service-block"]');
  const serviceBlock = document.querySelector('#service-block');
  const main = document.querySelector('main');
  const arrowUp = document.querySelector('.arrow-up');
  const menu = document.querySelector('menu');
  const menuLinks = menu.querySelectorAll('li');

  const scroll = e => {
    e.preventDefault();

    const section = document.querySelector(e.target.hash);

    section.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  menuLinks.forEach(link => {
    link.addEventListener('click', scroll);
  });

  mousBottom.addEventListener('click', e => {
    e.preventDefault();
    serviceBlock.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });

  arrowUp.addEventListener('click', e => {
    e.preventDefault();
    main.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop <= 900) {
      arrowUp.style.display = 'none';
    } else {
      arrowUp.style.display = '';
    }
  });
};


export default smoothScroll;