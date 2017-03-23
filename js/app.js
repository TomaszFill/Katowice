$(document).ready(function(){

// Logo animation
var menu = $('#menu').find('li');


if($(window).width() > 800){
menu.each(function(i){
        $(this).hide().delay(i*250).fadeIn();}
);


// education animation text
var photo = $('.photo');
var info = $('.info');
info.hide()
  photo.on('click', function(){
    $(this).next().fadeIn(2000);
    });
}


// sticky menu

var nav = $('.container');
var menu = $('#menuSection');
var menuPosition = nav.offset();

$(window).on('scroll',function(){
  if(menuPosition.top < $(document).scrollTop() ){
    nav.addClass('sticky');
      $(window).on('resize', function(){
        menuPosition = nav.offset()
      })
    }
  else{
    nav.removeClass('sticky');
  }

});

// culture animation

var miejsca = $('.miejsca');
var heart = $('#kultura').find('.serce');
var click = $('#kultura').find('.click');
heart.on('click', function(){
  miejsca.animate({
    opacity: 1,
  },5000);
  heart.animate({
    opacity: 0,
  },2000);
  click.animate({
    opacity: 0,
  },2000);
  miejsca.css('z-index', '2');

})




});
