'use strict';
const smoothScroll = () => {
  const mousBottom = document.querySelector('a[href="#service-block"]');
  const serviceBlock = document.querySelector('#service-block');
  const toHome = document.querySelector('.col-md-2.col-sm-2.col-12>a');
  const main = document.querySelector('main');
  const arrowUp = document.querySelector('.arrow-up');

  mousBottom.addEventListener('click', e => {
    e.preventDefault();
    serviceBlock.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });

  toHome.addEventListener('click', e => {
    e.preventDefault();
    main.scrollIntoView({
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