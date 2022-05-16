export const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = calcBlock.querySelector('.calc-type');
    const calcSquare = calcBlock.querySelector('.calc-square');
    const calcCount = calcBlock.querySelector('.calc-count');
    const calcDay = calcBlock.querySelector('.calc-day');
    const spanTotal = document.getElementById('total');

    const countCalc = () => {
        console.log('calc');
    };

    calcBlock.addEventListener('change', e => {
        countCalc();
    });
};
