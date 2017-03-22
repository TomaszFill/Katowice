$(document).ready(function(){

// Logo animation
var logo = $('.logo');
var menu = $('.menu').find('li');
var h1 = $('header').find('h1');



if($(window).width() > 501){
menu.each(function(i){
        $(this).hide().delay(i*1400).fadeIn(1550);}
);

}


/*
// button partners
var partnerButton = $('.partnersList').find('ul button');
var partnersList = $('.partnersList').find('ul li');
partnersList.hide();
partnerButton.on('click', function(){
  partnersList.toggle(2000);
});
*/
/*
var h1 = $('h1');
    var words = [
        'Kattowitz',
        'Katowice',
        'Katowicy',
        'Katowice',
        'Katovice'
        ], i = 0;

    setInterval(function(){
        h1.delay(1000).fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });

    }, 3000);
*/




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



});
