
		
			$(document).ready(function() {
  console.log( "ready!" );
  $('#Carousel').carousel({
				interval: 5000
			})
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

 $(document).on("click",".profile-opener",function() {
        $('body').addClass('no-scroll profile-open');
    });

	
	$(document).on("click",".close",function() {
		$('body').removeClass('no-scroll menu-open profile-open');
	});

	$(document).on("focus","#buy-sub",function() {
		$('div.buy-sub').show();
		$(document).bind('focusin.buy-sub click.buy-sub',function(e) {
			if ($(e.target).closest('.buy-sub, #buy-sub').length) return;
			$(document).unbind('.buy-sub');
			$('div.buy-sub').fadeOut('medium');
		});
	});
	$('div.buy-sub').hide();

	 
	   
	<!--Side menu -->
			
    function Ftoggle(){
        $(".forgot").slideToggle('slow');
    }
});

		$(window).load(function() {
		   var boxheight = $('#myCarousel .carousel-inner').innerHeight();
		   var itemlength = $('#myCarousel .item').length;
		   var triggerheight = Math.round(boxheight/itemlength+1);
		   $('#myCarousel .list-group-item').outerHeight(triggerheight);
	   });
		
	   
	   
	   
	   
	   
		   
		   
	   
	  
			