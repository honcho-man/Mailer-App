const menuBox = $('.menu-box'),
    loaderContn = $('.loader-contn')
$(document).ready(function() {
    menuBox.slideUp('fast')
    setTimeout(() => {
        loaderContn.fadeOut('slow')
    }, 500);
    let compContn = localStorage.getItem('composerContn');
    if (compContn == 'closed') {
        clearComposer()
    }
})

$(document).ready(function () {
    let comp = localStorage.getItem('composer');
    if (comp == 'maximized') {
        maxComposer()
    } else {
        minComposer()
    }
});

$('.header').find('.menu').on('click', function () {
    if ($(this).hasClass('true')) {
        menuBox.slideDown('slow')  
        $(this).removeClass('true')
    } else {
        $(this).addClass('true')
        menuBox.slideUp('slow')  
    }
})

//composer 
const composer = $('.composer'),
    minimize = $('.minimize'),
    maximize = $('.maximize'),
    clear = $('.clear'),
    compose = $('.compose');

maximize.on('click', ()=> {
    maxComposer()
})

minimize.on('click', ()=> {
    minComposer()
})

clear.on('click', ()=> {
    clearComposer()
})

compose.on('click', ()=> {
    Compose()
})

$('.cog').on('click', function() {
    if ($('.settings').hasClass('hide')) {
        $('.settings').fadeOut('fast').removeClass('hide')
    } else {
        $('.settings').fadeIn('fast').addClass('hide')
    }
})

$(document).on('click', function (event) {
    let $trigger = $(".setting");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".settings").fadeOut("fast");
    }
})

const maxComposer = function () {
    composer.fadeOut('fast')
    maximize.fadeOut('fast')
    setTimeout(() => {
        composer.fadeIn('fast').css({
            width: '100%'
        })
        $('.composer-body').css({            
            height: '65vh'
        })
        minimize.fadeIn('fast')
    }, 150);
    localStorage.setItem('composer', 'maximized')
},
minComposer = function () {
    composer.fadeOut('fast')
    minimize.fadeOut('fast')
    setTimeout(() => {
        composer.fadeIn('fast').css('width', '600px')
        $('.composer-body').css({            
            height: '100%'
        })
        maximize.fadeIn('fast')
    }, 150);
    localStorage.setItem('composer', 'minimized')
},
clearComposer = function () {
    composer.fadeOut('fast').addClass('fade-out')
    localStorage.setItem('composerContn', 'closed')
    setTimeout(() => {
        composer.find('input').val('')
        composer.find('textarea').val('')
    }, 150);
    compose.fadeIn('fast')
},
Compose = function () {
    composer.fadeIn('fast').removeClass('fade-out')
    localStorage.setItem('composerContn', 'open')
    compose.fadeOut('fast')
}