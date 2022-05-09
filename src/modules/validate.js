'use strict';
const validate = () => {
  const input = document.querySelectorAll('.calc-item');

  input.forEach((el, index) => {
    if (index > 0) {
      el.addEventListener('change', () => {
        if (!/[^\d]/g.test(el.value) || el.value.trim() !== '') {
          el.style.borderColor = 'green';
        } else {
          el.value = 'Ввeдите число';
          el.style.cssText = `
          border-color: red;
          color: red;
          `;
        }
      });
    }
    el.addEventListener('click', () => {
      el.value = '';
      el.removeAttribute('style');
    });
  });
};

export default validate;