export const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const paginationBlock = document.querySelector('.portfolio-dots');
    const timeInterval = 2000;

    let currentSlide = 0;
    let interval;


    slides.forEach((el, index) => {
        paginationBlock.innerHTML += `<li class="dot ${index === 0 ? 'dot-active' : ''}"></li>`;
    });

    const nextSlide = (el, index, strClass) => {
        el[index].classList.remove(strClass);
    };

    const prevSlide = (el, index, strClass) => {
        el[index].classList.add(strClass);
    };

    const autoSlide = () => {
        const pagination = document.querySelectorAll('.dot');

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(pagination, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(pagination, currentSlide, 'dot-active');
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', e => {
        const pagination = document.querySelectorAll('.dot');
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(pagination, currentSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            pagination.forEach((el, index) => {
                if (e.target === el) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(pagination, currentSlide, 'dot-active');
    });

    sliderBlock.addEventListener('mouseenter', e => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', e => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);

    startSlide(timeInterval);

};
