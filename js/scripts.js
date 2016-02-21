//Animate images after page load
$(document).ready(function(){
	$("#latte").css("display", "inline").addClass("animated fadeInDown");
	$("#ukulele").css("display", "inline").addClass("animated fadeInRight");
	$("#guitar").css("display", "inline").addClass("animated fadeInRight");
	$("#desk").css("display", "inline").addClass("animated fadeInLeft");
	$("#food").css("display", "inline").addClass("animated fadeInUp");
	$(".latteText").css("display", "inline").addClass("animated zoomIn");
	$(".guitarText").css("display", "inline").addClass("animated zoomIn");
	$(".webappText").css("display", "inline").addClass("animated zoomIn");
	$(".foodText").css("display", "inline").addClass("animated zoomIn");
});

//Vertical Nav
var main = function() {
  // Push the nav over by 285px
  $('.icon-menu').click(function() {
    $('.menu').animate({
      right: "0px"
    }, 200);
  });

  // Then push them back
  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-285px"
    }, 200);
  });
};


$(document).ready(main);

//Smooth Scrolling! Thank you Devin https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

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