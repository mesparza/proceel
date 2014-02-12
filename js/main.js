jQuery(document).ready(function($){

	// Menu Toggle
	var $menu = $('#menu'),
	$menulink = $('.menu-link');

	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});

	// Smooth Scroll
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top -100
	        }, 1000);
	        return false;
	      }
	    }
	  });

	// CBP Scroller
	new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );

	// OWL Carousel
	$("#owl-example").owlCarousel({
 
	    // Most important owl features
	    items : 8,
	    itemsCustom : false,
	    itemsDesktop : [1300,4],
	    itemsDesktopSmall : false,
	    itemsTablet: [800,2],
	    itemsTabletSmall: false,
	    itemsMobile : [420,1],
	    singleItem : false,
	    itemsScaleUp : false,
	 
	    //Basic Speeds
	    slideSpeed : 200,
	    paginationSpeed : 800,
	    rewindSpeed : 1000,
	 
	    //Autoplay
	    autoPlay : false,
	    stopOnHover : true,
	 
	    //Pagination
	    pagination : true,
	    paginationNumbers: false,
	 
	    // Responsive 
	    responsive: true,
	    responsiveRefreshRate : 200,
	    responsiveBaseWidth: window,
	 
	    //Lazy load
	    lazyLoad : true,
	    lazyFollow : true,
	    lazyEffect : "fade",
	 
	    //Mouse Events
	    dragBeforeAnimFinish : true,
	    mouseDrag : true,
	    touchDrag : true,
	});

	// Nivo Light box
	$('.owl-carousel a').nivoLightbox({
	    effect: 'slideUp',                             // The effect to use when showing the lightbox
	    theme: 'default',                           // The lightbox theme to use
	    clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
	    errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	});

	// Flexslider
	$('.flexslider').flexslider({
		animation: 'slide',
		animationSpeed: 800,
		directionNav: true,
		controlNav: false,
		smoothHeight: true,
		prevText: '<span aria-hidden="true" class="icon-angle-left"></span>',
		nextText: '<span aria-hidden="true" class="icon-angle-right"></span>'
	});
	
});