$(document).ready(function () {
    //timer
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        let clock = document.getElementById(id);
        let hoursSpan = clock.querySelector('.hours');
        let minutesSpan = clock.querySelector('.minutes');
        let secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        let timeinterval = setInterval(updateClock, 1000);
    }

// let deadline="January 01 2024 00:00:00 GMT+0300"; //for Ukraine
    let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
    if ($('#countdown').length) {
        initializeClock('countdown', deadline);
    }



    //faq
    $('.js-accordion-header').on('click', function () {
        $(this).toggleClass('active').siblings('.js-accordion-body').slideToggle();
    })

    //category

    $('.js-category-toggle').on('click',function () {
        $(this).toggleClass('active').siblings('.js-category-list').slideToggle();
    })

    $(document).mouseup( function(e){
        var div = $( ".js-category-toggle,.js-category-list" );
        if ( !div.is(e.target)
            && div.has(e.target).length === 0 ) {
            $('.js-category-list').slideUp();
            $('.js-category-toggle').removeClass('active');
        }
    });
})