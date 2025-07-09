// const swiper = new Swiper('.mySwiper', {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     centeredSlides: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });

const swiper = new Swiper('.mySwiper', {
    grabCursor: true,
    slidesPerView: 2,
    effect: 'creative',
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -800],
        },
        next: {
            translate: ['100%', 0, 0],
        },
    },
});
