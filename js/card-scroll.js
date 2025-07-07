// 'use strict';
// gsap.registerPlugin(ScrollTrigger);

// const colors = ['linear-gradient(165.72deg, #f7bdf8 21.15%, #cd237f 81.93%)', 'linear-gradient(165.72deg, #a8ff78 21.15%, #78ffd6 81.93%)', 'linear-gradient(165.72deg, #78d6ff 21.15%, #7878ff 81.93%)', 'linear-gradient(165.72deg, #ff7878 21.15%, #ffd678 81.93%)', 'linear-gradient(165.72deg, #d6ff78 21.15%, #ff78d6 81.93%)', 'linear-gradient(165.72deg, #78ffa8 21.15%, #a878ff 81.93%)', 'linear-gradient(165.72deg, #ffa878 21.15%, #ff78a8 81.93%)', 'linear-gradient(165.72deg, #78a8ff 21.15%, #a8ff78 81.93%)', 'linear-gradient(165.72deg, #ff78ff 21.15%, #78ffff 81.93%)', 'linear-gradient(165.72deg, #a8ff78 21.15%, #ff78ff 81.93%)'];

// const cardsWrappers = gsap.utils.toArray('.awaits__card-wrapper');
// const cards = gsap.utils.toArray('.awaits__card');

// cardsWrappers.forEach((wrapper, i) => {
//     const card = cards[i];
//     let scale = 1,
//         rotation = 0;

//     if (i !== cards.length - 1) {
//         scale = 0.9 + 0.025 * i;
//         rotation = -10;
//     }

//     const colorIndex = i % colors.length;
//     card.style.background = colors[colorIndex];

//     gsap.to(card, {
//         scale: scale,
//         rotationX: rotation,
//         transformOrigin: 'top center',
//         ease: 'none',
//         scrollTrigger: {
//             trigger: wrapper,
//             start: 'top ' + (60 + 10 * i),
//             end: 'bottom 550',
//             endTrigger: '.awaits__wrapper',
//             scrub: true,
//             pin: wrapper,
//             pinSpacing: false,
//             id: i + 1,
//         },
//     });
// });

// let horizontalSection = document.querySelector('.horizontal');

// console.log(horizontalSection.scrollWidth);

// gsap.to('.horizontal', {
//     x: () => horizontalSection.scrollWidth * -1,
//     xPercent: 100,
//     scrollTrigger: {
//         trigger: '.horizontal',
//         start: 'center center',
//         end: '+=2000px',
//         pin: '#horizontal-scoll',
//         scrub: true,
//         invalidateOnRefresh: true,
//     },
// });

'use strict';
gsap.registerPlugin(ScrollTrigger);

// 1. Горизонтальный скролл (исправленная версия)
const horizontalSection = document.querySelector('#horizontal-scoll');
const horizontalContent = document.querySelector('.horizontal');

gsap.to(horizontalContent, {
    x: () => -(horizontalContent.scrollWidth - document.documentElement.clientWidth),
    ease: 'none',
    scrollTrigger: {
        trigger: '.horizontal-scroll-inner',
        start: 'center center',
        end: () => '+=' + (horizontalContent.scrollWidth - window.innerWidth),
        pin: '.horizontal-scroll-inner',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
    },
});

// 2. Оригинальная анимация карточек (без изменений)
const colors = ['linear-gradient(165.72deg, #f7bdf8 21.15%, #cd237f 81.93%)', 'linear-gradient(165.72deg, #a8ff78 21.15%, #78ffd6 81.93%)', 'linear-gradient(165.72deg, #78d6ff 21.15%, #7878ff 81.93%)', 'linear-gradient(165.72deg, #ff7878 21.15%, #ffd678 81.93%)'];

const cardsWrappers = gsap.utils.toArray('.awaits__card-wrapper');
const cards = gsap.utils.toArray('.awaits__card');

cardsWrappers.forEach((wrapper, i) => {
    const card = cards[i];
    let scale = 1,
        rotation = 0;

    if (i !== cards.length - 1) {
        scale = 0.9 + 0.025 * i;
        rotation = -10;
    }

    const colorIndex = i % colors.length;
    card.style.background = colors[colorIndex];

    gsap.to(card, {
        scale: scale,
        rotationX: rotation,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
            trigger: wrapper,
            start: 'top ' + (60 + 10 * i),
            end: 'bottom 550',
            endTrigger: '.awaits__wrapper',
            scrub: true,
            pin: wrapper,
            pinSpacing: false,
            id: 'card-' + i,
        },
    });
});
