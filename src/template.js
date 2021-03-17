import { html } from '../node_modules/lit-html/lit-html.js';


const clockFaceTemplate = (digits) => html`
    ${digits.map(digit => html`<div class="number number${`${digit}`}">🔘</div>`)}
`;

const clockHandsTemplate = () => html`
<div class="hand hour"></div>
<div class="hand minute"></div>
<div class="hand second"></div>`;

const dateTemplate = (day, month, year) => html`
<div id="date">
    <h2 class="day">${day}</h2>
    <h2 class="month">${month}</h2>
    <h2 class="year">${year}</h2>
</div>`;


const clockTemplate = (digits, day, month, year) => html`
<div id="clock">
    <section id="clockHands">
        ${clockHandsTemplate()}
    </section>
    <section id="clockFace">
        ${clockFaceTemplate(digits)}
    </section>
    <section id="date">
        ${dateTemplate(day, month, year)}
    </section>
</div>`;

export { clockTemplate }