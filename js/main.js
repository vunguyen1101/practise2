///isotope
$(document).ready(function(){
  var content=$(".boxes"),tabs=$(".tabs li");
  
  tabs.on('click', function(){

    tabs.removeClass('active').filter(this).addClass('active');
    var filter=$(this).data('filter');
    
    content.isotope({
      filter: filter

    });
    return false;
  });
});
////end isotope

/////Pricing Background

$(document).ready(function(){
  $(".pricingTable").hover(function(){
    $(this).addClass("addBacround");
  },
  function(){
    $(this).removeClass("addBacround");
  }); 
});

 

//scroll to section
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	},1500);
});

//////counter
$('.counter').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

//////// slick Twitter
$('.twitterBrg').slick({
  dots: true
});

///////scrolle event

$(window).scroll(function() {
  var hT = $('#scroll-to').offset().top,
      hH = $('#scroll-to').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
   console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)&&wS < (hT+hH+wH)){
      $('.percentline').css({"background":"red"});
  }
  // else $('.percentline').css({"left":"30px"});
});





