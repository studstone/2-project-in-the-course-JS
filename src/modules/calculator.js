export const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = calcBlock.querySelector('.calc-type');
    const calcSquare = calcBlock.querySelector('.calc-square');
    const calcCount = calcBlock.querySelector('.calc-count');
    const calcDay = calcBlock.querySelector('.calc-day');
    const spanTotal = document.getElementById('total');

    const countCalc = () => {
        // const calcTypeValue = calcType;
        console.dir(calcType);
    };

    calcBlock.addEventListener('change', e => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    });
};
