'use strict';

$(document).ready(function () {
    const $numberElements = $('.increase-number');
    const animationStates = new Map();
    const viewFactor = 0.3;

    const animateNumber = (element, targetNumber) => {
        let currentNumber = 0;

        const updateNumber = () => {
            if (currentNumber < targetNumber) {
                currentNumber += Math.ceil((targetNumber - currentNumber) / 150);
                $(element).text(currentNumber);
                requestAnimationFrame(updateNumber);
            } else {
                $(element).text(targetNumber);
            }
        };

        updateNumber();
    };

    const isInViewport = element => {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.bottom - rect.top;
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        return visibleHeight / elementHeight >= viewFactor;
    };

    const handleScroll = () => {
        $numberElements.each(function () {
            if (isInViewport(this) && !animationStates.get(this)) {
                const targetNumber = parseInt($(this).attr('data-target'));
                animationStates.set(this, true);
                animateNumber(this, targetNumber);
            }
        });
    };

    $(window).on('scroll', handleScroll);
    handleScroll();
});
