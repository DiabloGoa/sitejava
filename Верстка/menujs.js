$(document).ready(function() {
    $(window).on('scroll',stick);
    $('.UpFooter').on('click',updown); 
    // добавляем клавиши закрытия в подсказки
   var tmp = $('.toplefttooltip').html();
   var tmp = $('.toplefttooltip').html('<a href="close"><i class="fas fa-times fa-1"></i></a>'+tmp);
   var tmp = $('.toprighttooltip').html();
   var tmp = $('.toprighttooltip').html('<a href="close"><i class="fas fa-times fa-1"></i></a>'+tmp);
   var tmp = $('.toptooltip').html();
   var tmp = $('.toptooltip').html('<a href="close"><i class="fas fa-times fa-1"></i></a>'+tmp);
   var tmp = $('.downlefttooltip').html();
   var tmp = $('.downlefttooltip').html('<a href="close"><i class="fas fa-times fa-1"></i></a>'+tmp);
   var tmp = $('.downrighttooltip').html();
   var tmp = $('.downrighttooltip').html('<a href="close"><i class="fas fa-times fa-1"></i></a>'+tmp);
   var tmp = $('.downtooltip').html();
   var tmp = $('.downtooltip').html('<a href="close"><i class="fas fa-times fa-1"></i></a>'+tmp);
   $('a[href="close"]').click(function(event){
    event.preventDefault();
    $(this).parent().effect('drop');
   });
   


});

function updown(){
    if($('#Footer').hasClass('Close')) 
    {
        $("#Footer").removeClass('Close');
        $('html').animate({ scrollTop: 9999999999999 }, 500);
    }
    else
    {
        $("#Footer").addClass('Close');
    }
}


function stick(){
    if($('html').scrollTop() >= $("#Up").innerHeight()) 
    {
        $("#MMenu").addClass('stickytop');
        $(".toplefttooltip").addClass('tolltipUP');
        $(".toprighttooltip").addClass('tolltipUP');
        $(".toptooltip").addClass('tolltipUP');
        var hg = $('#Content').innerHeight() + $('#Head').innerHeight();   
        var scr = $('html').scrollTop() + $(window).height();
  
        if( scr >= hg)
        {
            scr = scr-hg;
            $(".downlefttooltip").css("bottom", scr +"px");
            $(".downrighttooltip").css("bottom", scr +"px");
            $(".downtooltip").css("bottom", scr +"px");
        }
        else
        {
            $(".downlefttooltip").css("bottom", "0px");
            $(".downrighttooltip").css("bottom", "0px");
            $(".downtooltip").css("bottom", "0px");
        };
    }
    else
    {
        $("#MMenu").removeClass('stickytop');
        $(".toplefttooltip").removeClass('tolltipUP');
        $(".toprighttooltip").removeClass('tolltipUP');
        $(".toptooltip").removeClass('tolltipUP');  
    }
}


$(document).ready(function() {
var ww = $(window).width();//initial width
var itms = 0;
$("#tcntr li").each(function(index, element) {
    itms += $(element).width();
});
var sz = ww - itms;
sz = Math.round(sz/2);
$("#tcntr").css("margin-left", sz+"px");
$(window).on('resize', function() {
    ww = $(this).width();//new width
        var sz = ww - itms;
        sz = Math.round(sz/2);
        $("#tcntr").css("margin-left", sz+"px");
 });
});

$(document).ready(function() {
    var nm = document.location.href;
    nm = nm.split('/');
    nm = nm[nm.length-1];
    $("#tcntr li").removeClass('slctmnu');
    $("#tcntr li").each(function(indx,elm){
       var lnk = $(elm).children("a").attr('href');
       if (lnk.indexOf(nm) >=0)
       {
        $(elm).addClass('slctmnu');
       }
    });
});


function chkenb(){
    $(this).addClass("fa-angle-up");
    $(this).removeClass('fa-thumbtack');
    $(".fa-angle-up").unbind('click', chkdis);
    $(".fa-angle-up").on('click', chkdis);
    $("#MMenu").removeClass('stickytop');
    $(window).unbind('scroll',stick);
    $(".toplefttooltip").removeClass('tolltipUP');
    $(".toprighttooltip").removeClass('tolltipUP');
    $(".toptooltip").removeClass('tolltipUP');  
};

function chkdis(){
    $(this).addClass("fa-thumbtack");
    $(this).removeClass('fa-angle-up');
    $(".fa-thumbtack").unbind('click', chkenb);  
    $(".fa-thumbtack").on('click', chkenb);    
    $(window).on('scroll',stick);
};
$(document).ready(function() {
    $(".fa-thumbtack").on('click', chkenb);
    $(".fa-angle-up").on('click', chkdis);
});