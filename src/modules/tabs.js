const tabs = () => {
    const tabPanel = document.querySelector('.service-header');
    const tabs = document.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');
    const widht = document.documentElement.clientWidth;
    console.log(widht);


    tabPanel.addEventListener('click', e => {
        if (e.target.closest('.service-header-tab')) {
            tabs.forEach((tab, index) => {
                const tabButton = e.target.closest('.service-header-tab');
                if (tab === tabButton && widht > 768) {
                    let i = 0;

                    tab.classList.add('active');
                    tabContent[index].classList.remove('d-none');
                    tabContent[index].style.opacity = 0;

                    const interval = setInterval(() => {
                        i += 0.1;

                        tabContent[index].style.opacity = i;
                        if (tabContent[index].style.opacity >= 1) {
                            clearInterval(interval);
                        }
                    }, 40);
                } else if (tab === tabButton && widht <= 768) {
                    tab.classList.add('active');
                    tabContent[index].classList.remove('d-none');
                } else {
                    tab.classList.remove('active');
                    tabContent[index].classList.add('d-none');
                    tabContent[index].removeAttribute('style');
                }
            });
        }
    });
};

export default tabs;
