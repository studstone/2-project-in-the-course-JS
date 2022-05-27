const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const formElement = form.querySelectorAll('input');
    const statusBlock = document.createElement('span');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const nameRegex = /^[а-яА-ЯёЁa]{2,20}$/;
    const emailRegex = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    const numberRegex = /^(\+7|8)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?\d{2}/;
    const messageRegex = /^[?!,.а-яА-ЯёЁ0-9\s]+$/;

    const validate = list => {
        let success = true;


        list.forEach(input => {
            if (input.classList.contains('form-name')) {
                input.addEventListener('input', () => {
                    if (nameRegex.test(input.value)) {
                        input.style.border = '';
                    } else {
                        input.style.border = 'solid red 2px';
                    }
                });
            }
            if (input.classList.contains('top-form')) {
                input.addEventListener('input', () => {
                    if (nameRegex.test(input.value)) {
                        input.style.border = '';
                    } else {
                        input.style.border = 'solid red 2px';
                    }
                });
            }
            if (input.classList.contains('form-email')) {
                input.addEventListener('input', () => {
                    if (emailRegex.test(input.value)) {
                        input.style.border = '';
                    } else {
                        input.style.border = 'solid red 2px';
                    }
                });
            }
            if (input.classList.contains('form-phone')) {
                input.addEventListener('input', () => {
                    if (numberRegex.test(input.value)) {
                        input.style.border = '';
                    } else {
                        input.style.border = 'solid red 2px';
                    }
                });
            }
            if (input.classList.contains('mess')) {
                input.addEventListener('input', () => {
                    if (messageRegex.test(input.value)) {
                        input.style.border = '';
                    } else {
                        input.style.border = 'solid red 2px';
                    }
                });
            }
            if (input.value === '') {
                success = false;
            }
        });
        return success;
    };

    validate(formElement);

    const sendData = data => fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

    const submitForm = () => {
        const formData = new FormData(form);
        const formBody = {};


        formData.forEach((value, key) => {
            formBody[key] = value;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElement)) {
            statusBlock.textContent = loadText;
            statusBlock.style.color = '#fff';
            form.append(statusBlock);

            sendData(formBody)
                .then(() => {
                    statusBlock.textContent = successText;

                    formElement.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(() => statusBlock.textContent = errorText);
        } else {
            formElement.forEach(input => {
                if (input.style.border === 'solid red 2px') {
                    input.style.border = '';
                } else {
                    input.style.border = 'solid red 2px';
                }
            });
        }
    };

    try {
        if (!form) {
            throw new Error('Верни форму на место');
        }

        form.addEventListener('submit', event => {
            event.preventDefault();

            submitForm();
        });
    } catch (error) {
        alert(error.massage);
    }
};

export default sendForm;
