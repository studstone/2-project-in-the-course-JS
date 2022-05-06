'use strict';
const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const popup = document.querySelector('.popup');
  const buttonClosePopup = popup.querySelector('.popup-close');

  buttons.forEach((el) => {
    el.addEventListener('click', () => {
      popup.style.display = `block`;
    });
  });
  buttonClosePopup.addEventListener('click', () => {
    popup.style.display = ``;
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      popup.style.display = ``;
    }
  });

  window.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('popup') && !target.closest('.popup-btn')) {
      popup.style.display = ``;
    }
  });
};

export default modal;