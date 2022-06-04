import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import smoothScroll from './modules/scroll';
import validate from './modules/validate';
import tabs from './modules/tabs';
import { slider } from './modules/slider';
import { calculator } from './modules/calculator';
import sendForm from './modules/sendForm';

timer('5 june 2022 13:30:00');
menu();
modal();
smoothScroll();
validate();
tabs();
slider();
calculator();
sendForm(
    {
        formId: 'form1',
        someElem: [{
            type: 'block',
            id: 'total'
        }]
    });
sendForm(
    {
        formId: 'form2',
        someElem: [{
            type: 'block',
            id: 'total'
        }]
    });
sendForm(
    {
        formId: 'form3',
        someElem: [{
            type: 'block',
            id: 'total'
        }]
    });
