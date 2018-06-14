$(document).ready(function() {



    // Смотрим на все часы
$('.dt1').html("<a href=\"\"><div class=\"Date\"></div><br/> <div class=\"hours\"></div> <div class=\"sep\">:</div> <div class=\"min\"></div> <div class=\"sep\">:</div> <div class=\"sec\"></div> <br/> <div class=\"line\"><div class=\"lineUP\"></div></a>");
    
$('.clock>a').click(function(event){
    event.preventDefault();
    event.stopPropagation();
    if ($(event.target).parent('a').parent().hasClass('openright'))
    {
        $('.downrighttooltip').effect('slide');
    };
    if ($(event.target).parent('a').parent().hasClass('openleft'))
    {
        $('.downlefttooltip').effect('slide');
    };
   });

// Создаем две переменные с названиями месяцев и названиями дней.
    var FullmonthNames = [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ]; 
    var monthNames = [ "Янв", "Фев", "Мaрт", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноябрь", "Дек" ]; 
    
    var dayNames= ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]

    // Создаем объект newDate()
    var newDate = new Date();
    // "Достаем" текущую дату из объекта Date
    newDate.setDate(newDate.getDate());
    // Получаем день недели, день, месяц и год
    $('.FlDate').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
    $('.Date').html(( newDate.getDate() < 10 ? "0" : "" ) + newDate.getDate() + '.' + ( newDate.getMonth() < 10 ? "0" : "" )+ newDate.getMonth() + '.' + newDate.getFullYear());
    var flsz = $('.Date').outerWidth();
    $('.line').width(flsz); 
    setInterval( function() {
        var seconds = new Date().getSeconds();
        $('.lineUP').width(flsz*(seconds/60));
    },1000);


    setInterval( function() {
        // Создаем объект newDate() и показывает секунды
        var seconds = new Date().getSeconds();
        // Добавляем ноль в начало цифры, которые до 10
        $(".sec").html(( seconds < 10 ? "0" : "" ) + seconds);
    },1000);

    setInterval( function() {
        // Создаем объект newDate() и показывает минуты
        var minutes = new Date().getMinutes();
        // Добавляем ноль в начало цифры, которые до 10
        $(".min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);

    setInterval( function() {
        // Создаем объект newDate() и показывает часы
        var hours = new Date().getHours();
        // Добавляем ноль в начало цифры, которые до 10
        $(".hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);				
});