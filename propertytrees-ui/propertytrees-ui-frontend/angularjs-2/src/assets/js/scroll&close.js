
		
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

	 
	   
	// <!--Side menu -->
			
    function Ftoggle(){
        $(".forgot").slideToggle('slow');
    }


	  var accordionId = $(this).attr("accordion-id"),
		numPanelOpen = $(accordionId + ' .collapse.in').length;
	  
	  $(this).toggleClass("active");
  
	  if (numPanelOpen == 0) {
		openAllPanels(accordionId);
	  } else {
		closeAllPanels(accordionId);
	  }
	
		function openAllPanels(aId){
	  console.log("setAllPanelOpen");
	  $(aId + ' .panel-collapse:not(".in")').collapse('show');
	}
	closeAllPanels = function(aId) {
	  console.log("setAllPanelclose");
	  $(aId + ' .panel-collapse.in').collapse('hide');
	}
	   
	    $('[data-toggle="popover"]').popover({
                       placement : 'top',
                       trigger : 'hover'
                   });

	    loadGallery(true, 'a.thumbnail');
		
			//This function disables buttons when needed
			function disableButtons(counter_max, counter_current){
				$('#show-previous-image, #show-next-image').show();
				if(counter_max == counter_current){
					$('#show-next-image').hide();
				} else if (counter_current == 1){
					$('#show-previous-image').hide();
				}
			}
		
			/**
			 *
			 * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
			 * @param setClickAttr  Sets the attribute for the click handler.
			 */
		
			function loadGallery(setIDs, setClickAttr){
				var current_image,
					selector,
					counter = 0;
		
				$('#show-next-image, #show-previous-image').click(function(){
					if($(this).attr('id') == 'show-previous-image'){
						current_image--;
					} else {
						current_image++;
					}
		
					selector = $('[data-image-id="' + current_image + '"]');
					updateGallery(selector);
				});
		
				function updateGallery(selector) {
					var $sel = selector;
					current_image = $sel.data('image-id');
					$('#image-gallery-caption').text($sel.data('caption'));
					$('#image-gallery-title').text($sel.data('title'));
					$('#image-gallery-image').attr('src', $sel.data('image'));
					disableButtons(counter, $sel.data('image-id'));
				}
		
				if(setIDs == true){
					$('[data-image-id]').each(function(){
						counter++;
						$(this).attr('data-image-id',counter);
					});
				}
				$(setClickAttr).on('click',function(){
					updateGallery($(this));
				});
			}
});

		$(window).load(function() {
		   var boxheight = $('#myCarousel .carousel-inner').innerHeight();
		   var itemlength = $('#myCarousel .item').length;
		   var triggerheight = Math.round(boxheight/itemlength+1);
		   $('#myCarousel .list-group-item').outerHeight(triggerheight);
	   });
		
	   
	   
	   
	   
	   
		   
		   
	   
	  
			