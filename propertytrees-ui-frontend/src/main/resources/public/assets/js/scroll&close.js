
		
			$(document).ready(function() {
  console.log( "ready!" );
});
		$(document).ready(function() {
			$('#Carousel').carousel({
				interval: 5000
			})
		});
	   
	   <!--Featured projects -->
	   
	   
	   $(document).ready(function(){
		   
		   var clickEvent = false;
		   $('#myCarousel').carousel({
			   interval:   4000	
		   }).on('click', '.list-group li', function() {
				   clickEvent = true;
				   $('.list-group li').removeClass('active');
				   $(this).addClass('active');		
		   }).on('slid.bs.carousel', function(e) {
			   if(!clickEvent) {
				   var count = $('.list-group').children().length -1;
				   var current = $('.list-group li.active');
				   current.removeClass('active').next().addClass('active');
				   var id = parseInt(current.data('slide-to'));
				   if(count == id) {
					   $('.list-group li').first().addClass('active');	
				   }
			   }
			   clickEvent = false;
		   });
	   })
	   $(window).load(function() {
		   var boxheight = $('#myCarousel .carousel-inner').innerHeight();
		   var itemlength = $('#myCarousel .item').length;
		   var triggerheight = Math.round(boxheight/itemlength+1);
		   $('#myCarousel .list-group-item').outerHeight(triggerheight);
	   });
	   
	<!--Side menu -->
	
	
	$('.profile-opener').on('click', function() {
		$('body').addClass('no-scroll profile-open');
	});
	
	$('.close').on('click', function() {
		$('body').removeClass('no-scroll menu-open profile-open');
	});

	
	
			
    function Ftoggle(){
        $(".forgot").slideToggle('slow');
    }
			