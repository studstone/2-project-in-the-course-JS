const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('span');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const validate = list => {
        let success = true;

        list.forEach(input => {
            if (input.classList.contains('success')) {
                success = false;
            }
        });

        return success;
    };

    const sendData = data => fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

    const submitForm = () => {
        const formElement = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        statusBlock.style.color = '#fff';
        form.append(statusBlock);

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
            sendData(formBody)
                .then(() => {
                    statusBlock.textContent = successText;

                    formElement.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(() => statusBlock.textContent = errorText);
        } else {
            alert('данные не валидны');
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
