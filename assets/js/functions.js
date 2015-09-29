$(window).scroll(function(){
  header_collapse();
  //pic_scroll();
});


// $(document).ready(function(){
//   $('ul').css("opacity", "1");
//   $('.list').children().slideUp('fast')
//   $('.menu').hide()
// });


$('#buly').click(function(){
  $('.bula_menu').toggleClass('toggle');
  $('.bula_menu').toggleClass('toggle_position_bula');
  $('.bula_menu').siblings().removeClass('toggle');
  $('.bula_menu').siblings().removeClass('toggle_position_bula');
});

$('#salatki').click(function(){
  $('.salatki_menu').toggleClass('toggle');
  $('.salatki_menu').siblings().removeClass('toggle');
});

$('#zapiekanki').click(function(){
  $('.zapiekanki_menu').toggleClass('toggle')
  $('.zapiekanki_menu').siblings().removeClass('toggle')
});

$('#napoje').click(function(){
  $('.napoje_menu').toggleClass('toggle')
  $('.napoje_menu').siblings().removeClass('toggle')
});

// function get_height(h) {
//   //$('.about').css('transform', 'translateY('+ h +')');
//   $('.about').css('margin-top', h);
//   console.log(h)
// }

function pic_scroll() {

  var wScroll = $(window).scrollTop();
  wScroll = wScroll * 0.15

  $('.picture').css('transform','translateY('+ wScroll +')');
}


function header_collapse() {
  var wScroll = $(window).scrollTop();

  if (wScroll > 100) {
      //$('header').stop().animate({height: "50px"},200);

      // $('header').css("height", "50px");
      // $('.nav').css("font-size", "18px");

      $('header').addClass('collapse');
    }
    else {
      //$('header').stop().animate({height: "100px"},200);

      // $('header').css("height", "100px");
      // $('.nav').css("font-size", "20px");
      $('header').removeClass('collapse');

    }
}
