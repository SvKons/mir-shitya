'use strict';

const elts = {
    textTop: document.querySelector('.top__text-top'),
    textBottom: document.querySelector('.top__text-bottom'),
};

const texts = ['Speak', 'Explore', 'Grow', 'Master', 'Enjoy', 'Improve', 'Achieve'];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.textTop.textContent = texts[textIndex % texts.length];
elts.textBottom.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.textBottom.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.textBottom.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.textTop.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.textTop.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.textTop.textContent = texts[textIndex % texts.length];
    elts.textBottom.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.textBottom.style.filter = '';
    elts.textBottom.style.opacity = '100%';

    elts.textTop.style.filter = '';
    elts.textTop.style.opacity = '0%';
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();
