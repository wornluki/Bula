$(window).scroll(function(){
  header_collapse();
  //pic_scroll();
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$('#buly').click(function(){
  $('.bula_menu')
    .toggleClass('toggle')
    .siblings().removeClass('toggle');
});

$('#salatki').click(function(){
  $('.salatki_menu')
    .toggleClass('toggle')
    .siblings().removeClass('toggle');
});

$('#zapiekanki').click(function(){
  $('.zapiekanki_menu')
    .toggleClass('toggle')
    .siblings().removeClass('toggle')
});

$('#napoje').click(function(){
  $('.napoje_menu')
    .toggleClass('toggle')
    .siblings().removeClass('toggle')
});

function pic_scroll() {
  var wScroll = $(window).scrollTop();
  wScroll = wScroll * 0.15

  $('.picture').css('background-position','center -'+ wScroll +'px')
};


function header_collapse() {
  var wScroll = $(window).scrollTop();

  if (wScroll > 100) {
      $('section.header').addClass('collapse');
    } else {
      $('section.header').removeClass('collapse');
    }
}
