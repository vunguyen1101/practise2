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
  $(document).ready(function(){
    $(".pricingTable").hover(function(){
      $(this).addClass("addBacround");
    },
    function(){
      $(this).removeClass("addBacround");
    }); 
  });
});

//scroll to top 
$('.leftcopy').click(function() {      
  $('body,html').animate({
      scrollTop : 0                      
  }, 1000);
});  


//scroll to section
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	},1500);
});
