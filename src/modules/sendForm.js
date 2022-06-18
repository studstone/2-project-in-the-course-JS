const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const formElement = form.querySelectorAll('input');
    const statusBlock = document.createElement('span');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const mapInputs = {
        'form-name': /^[а-яА-ЯёЁa]{2,20}$/,
        'top-form': /^[а-яА-ЯёЁa]{2,20}$/,
        'form-email': /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
        'form-phone': /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        'mess': /^[?!,.а-яА-ЯёЁ0-9\s]+$/,
    };

    const inputValidate = list => {
        let success = true;

        const newArray = Array.from(list);

        Object.keys(mapInputs).forEach(key => {

            const findInput = newArray.find(input => input.classList.contains(key));

            if (findInput && !(mapInputs[key].test(findInput.value))) {
                findInput.style.border = 'solid red 2px';
                success = false;
            }
        });

        return success;
    };

    const clearStyleBorder = item => {
        if (item.style.border) {
            item.style.border = '';
        }
    };

    const clearError = list => {
        list.forEach(input => {
            input.addEventListener('focus', e => clearStyleBorder(e.target));
        });
    };

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
        console.log(someElem);
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            formBody[elem.id] = elem.type === 'block' ? element.textContent : element.value;
        });
        console.log(someElem);

        inputValidate(formElement);

        if (inputValidate(formElement)) {
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
        }
    };

    clearError(formElement);

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
