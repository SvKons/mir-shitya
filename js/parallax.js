function scrollabout(scrollY, heightabout) {
    if (scrollY >= heightabout) {
        $('about').css({
            bottom: '0px',
        });
    } else {
        $('about').css({
            bottom: '-' + heightabout + 'px',
        });
    }
}

$(window).load(function () {
    let windowHeight = $(window).height(),
        aboutHeight = $('about').height(),
        heightDocument = windowHeight + $('.content').height() + $('about').height() - 20;

    $('#scroll-animate, #scroll-animate-main').css({
        height: heightDocument + 'px',
    });

    $('top').css({
        height: windowHeight + 'px',
        'line-height': windowHeight + 'px',
    });

    $('.wrapper-parallax').css({
        'margin-top': windowHeight + 'px',
    });

    scrollabout(window.scrollY, aboutHeight);

    window.onscroll = function () {
        let scroll = window.scrollY;

        $('#scroll-animate-main').css({
            top: '-' + scroll + 'px',
        });

        $('top').css({
            'background-position-y': 50 - (scroll * 100) / heightDocument + '%',
        });

        scrollabout(scroll, aboutHeight);
    };
});
