const smoothScroll = () => {
  const body = document.querySelector('body');
  const mousBottom = document.querySelector('a[href="#service-block"]');
  const serviceBlock = document.querySelector('#service-block');
  const main = document.querySelector('main');
  const menu = document.querySelector('menu');
  const menuLinks = menu.querySelectorAll('a');

  const arrowUp = document.createElement('div');

  arrowUp.innerHTML = `<img src="./images/up-arrow.svg" alt="" />`;

  arrowUp.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    z-index: 100;
    cursor: pointer;
  `;

  body.append(arrowUp);

  const scroll = e => {
    e.preventDefault();

    const section = document.querySelector(e.target.hash);

    section.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  menuLinks.forEach((link, index) => {
    if (index > 0) {
      link.addEventListener('click', scroll);
    }
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
