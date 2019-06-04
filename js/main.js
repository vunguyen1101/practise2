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

////hambuger

$(document).ready(function(){
	$('.hamburger').click(function(){
		$('.mobileNav').slideToggle(300);
	});
});

////Serarch bar
$(document).ready(function(){
	$('.searchBtnDesk').click(function(){
		$(this).toggleClass('OpenSearch');
	});
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
  dots: true,
  prevArrow: false,
  nextArrow: false
});

///////scrolle event
$(window).scroll(function() {
  var hA = $('#scroll-above').offset().top,
      hB = $('#ABOUT').offset().top,
      wS = $(this).scrollTop();
  if ( wS > hA || wS <hB ){
      $(".no1").addClass("scrollEvent"); 
      $(".no2").addClass("scrollEvent"); 
      $(".no3").addClass("scrollEvent"); 
      $(".no4").addClass("scrollEvent"); 
  }
  else{
    $(".no1").removeClass("scrollEvent");
    $(".no2").removeClass("scrollEvent");
    $(".no3").removeClass("scrollEvent");
    $(".no4").removeClass("scrollEvent");
  } 
});



/////scrollevent for hamburger

$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});


new WOW().init();

