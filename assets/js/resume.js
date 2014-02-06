
$.fn.blink = function(){

    var opacity = 0.4;
    if ($(this).attr('status') == '1'){
        $(this).attr('status', '0');
        opacity = 0.4;
    }else{
        $(this).attr('status', '1');
        opacity = 1.0;
    }

    var arrow = $(this);
    $(this).animate({opacity:opacity}, 1200);
}


var scrollLock = false;
$(function(){
    setInterval(function(){
        $('a.arrow').blink();
    }, 1200);

    $('a.arrow').click(function(){
        scrollLock = true;
        $('html, body').animate({ scrollTop: $(window).height() }, 1200, 'easeOutElastic', function(){scrollLock=false});

    });

    $('.full-height').height($(window).height());

    $(window).resize(function(){
        $('.full-height').height($(window).height());
    });

    $(window).scroll(function(){
        if (scrollLock) return;

        check_for_loader();
    });
    
    check_for_loader();
})


function check_for_loader(){
    if ($(window).scrollTop() >= $(window).height() - 300){
        $('.loader').each(function(){
            if ($(this).attr('completed') == 'yes' || $(this).attr('working') == 'yes') return;
            $(this).raduisProgressBar();
        });
        
    }
}