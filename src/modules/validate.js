'use strict';
const validate = () => {
  const input = document.querySelectorAll('.calc-item');

  input.forEach((el, index) => {
    index > 0 ? console.log(el) : console.log('net');
  });
};

export default validate;