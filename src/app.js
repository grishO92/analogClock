import { render } from '../node_modules/lit-html/lit-html.js';
import { clockTemplate } from './template.js'

const main = document.body;
let [day, month, year] = new Date().toLocaleDateString('en-UK').split('/');


const digits = [];

function setWatchFace() {
    for (let i = 1; i <= 12; i++) {
        digits.push(i + '');
        digits.push(i + '01');
        digits.push(i + '02');
        digits.push(i + '03');
        digits.push(i + '04');
    }
}

setWatchFace();

setInterval(render(clockTemplate(digits, day, month, year), main), 1000)
setInterval(setClock, 1000);

const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
