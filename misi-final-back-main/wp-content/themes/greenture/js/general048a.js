/**
 * General.js
 *
 * contains the theme functionalities 
 */

jQuery.noConflict();
var get_scroll = 0;

jQuery(window).scroll(function() {
	"use strict";
	
	get_scroll = jQuery(window).scrollTop();	
});

jQuery(window).load(function() {
	
	jQuery('body').find(".pageloader").delay(1000).fadeOut("slow");
	
	greenture_initBlogGrid();
	
	/* ======================================
	Scroll to Section if Hash exists
	====================================== */	
	if( window.location.hash ) {		
		setTimeout ( function () {
			jQuery.scrollTo( window.location.hash, 2000, { easing: 'easeInOutExpo', offset: 0, "axis":"y" } );
		}, 400 );
	}
});

jQuery(window).resize(function() {	
		
});

jQuery(document).ready(function($){
	
	$(".tpath-tooltip").tooltip();	
	$(".tpath-popover").popover();
	
	$('.tpath-features-list li:last-child').addClass('last-feature');

	/* =============================
	Active Onepage Nav Navigation
	============================= */	
	(function($) {
		"use strict"; 
  
		$('.main-nav').each(function() {  
			$(this).find('a[href]').each(function(i,a){
				var $a = $(a);
				var href = $a.attr('href');
				var target;
				
				// Get Splitted ID from page's URI in href tag
				target = href.substring(href.indexOf('#') + 1); 
				
				// update anchors TARGET with new one
				if(target.indexOf('section-') == 0) {  
					$a.attr('data-target', '#' + target);
				} else {
					$a.addClass('external-link');
				}
							
			});
		});
		
		$('.main-nav').onePageNav({
			currentClass: 'active',
			filter: ':not(.external-link)'
		});
  
 	})(jQuery);	
	
	(function($) {
		"use strict";		
		$('.tpath-row-inner-wrapper').each(function() {
			if( $(this).hasClass('vc-match-height-row') ) {	
				if( ! ( $(this).find('.wpb_column.vc_main_column.vc_column_container').hasClass( 'vc-match-height-content' ) ) ) {
					$(this).find('.wpb_column.vc_main_column.vc_column_container').addClass( 'vc-match-height-content' );
				}
			}
		});
		
		$('.footer-match-height-column').each(function() {
			if( ! ( $(this).find('.footer-match-column').hasClass( 'footer-match-height-content' ) ) ) {
				$(this).find('.footer-match-column').addClass( 'footer-match-height-content' );
			}
		});
		
		/* ======================== Match Height ======================== */
		if(Modernizr.mq('only screen and (min-width: 768px)')) { 
			$('.vc-match-height-row').each(function() {
				$(this).find( '.vc-match-height-content' ).matchHeight({ byRow: true });
			});
			
			$('.footer-match-height-column').each(function() {
				$(this).find( '.footer-match-height-content' ).matchHeight({ byRow: true });
			});
		}
		
		if(Modernizr.mq('only screen and (max-width: 767px)')) {
			$('.vc-match-height-row').each(function() {
				$(this).find( '.vc-match-height-content' ).matchHeight({ byRow: false });
			});
			
			$('.footer-match-height-column').each(function() {
				$(this).find( '.footer-match-height-content' ).matchHeight({ byRow: false });
			});
		}
		
		if( $('.footer-match-height-column').find('.wpcf7').length > 0 ) {
			$(document).on('wpcf7:submit', function() {
				$.fn.matchHeight._maintainScroll = true;
				$.fn.matchHeight._throttle = 60;
				$.fn.matchHeight._update();
			});
		}
		
	})(jQuery);
	
	greenture_PortfolioInit();
	greenture_teamInit();
	greenture_Tweets_Slider();
	greenture_Testimonials_Slider();
	initBlogSlider();
	greenture_CartRemoveItem();
	stickyHeaderInit();
	
	(function($) {
		"use strict";
		
		/* Check Slider Enable */
		var slider_class = $('#tpath_wrapper').find('.slider-section').attr('class');
		if( slider_class !== null && slider_class == 'slider-section' ) {
			$('body').addClass('revslider_active');
		}
		
		/* =============================
		ScrollUp
		============================= */
		
		$.scrollUp({
			scrollName: 'back-to-top',      // Element ID
			scrollDistance: 500,         // Distance from top/bottom before showing element (px)
			scrollFrom: 'top',           // 'top' or 'bottom'
			scrollSpeed: 800,            // Speed back to top (ms)
			easingType: 'easeInOutExpo',        // Scroll to top easing (see http://easings.net/)
			animation: 'slide',           // Fade, slide, none
			animationSpeed: 500,         // Animation speed (ms)
			scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
			scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
			scrollText: '<img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/up--v1.png"/>', // Text for element, can contain HTML
			scrollTitle: false,          // Set a custom <a> title if required.
			scrollImg: false,            // Set true to use image
			activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 999           		 // Z-Index for the overlay
		});
		
		
		/* =============================
		Progress Bar
		============================= */
		var bar = $('.progress-bar');
		$(bar).appear(function() {
			bar_width = $(this).attr('aria-valuenow');
			$(this).width(bar_width + '%');
			$(this).find('span').fadeIn(4000);
		});
		
		/* =============================
		Counter Section
		============================= */
		$(".tpath-count-number").appear(function(){
			$(this).each(function(){
				var datacount = $(this).attr('data-count');
				$(this).find('.counter').delay(3000).countTo({
					from: 5,
					to: datacount,
					speed: 4000,
					refreshInterval: 50
				});
			});
		});
		
		/* ==========================================
		Append Modal Outside all Containers
		========================================== */
		$(".tpath-modal").each( function() {
			$(".wrapper-class").append( jQuery(this) );
		});
		
		/* =============================
		Text Slider
		============================= */
		$('.tpath-text-slider').each(function() {
	
			var text_id = $(this).attr('id');
			var direction = $('#'+text_id+'').data('direction');
			var interval = $('#'+text_id+'').data('interval');
			
			$('#'+text_id+'').easyTicker({
				direction: direction,		
				speed: 'slow',
				interval: interval,
				height: 'auto',
				visible: 1,
				mousePause: 0
			});
			
		});
		
		/* Nav Search Bar */
		$(document).on( 'click', '.header-search-form .btn-trigger', function( event ){
			event.preventDefault();
			$(this).parent('.header-search-form').find('.search-form').fadeToggle("slow");
			$(this).toggleClass('ion-ios-search', 0);
			$(this).toggleClass('ion-ios-close-empty');
		});
		
		/* PrettyPhoto */
		$("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel', social_tools: false, deeplinking: false});
		
		/* Entry Date */
		$( '.posted-date .entry-date' ).each(function(){
			var post_date = $(this).text();
			var date_arr = post_date.split(/ +/);
			if(typeof date_arr !== 'undefined' && date_arr.length > 0) {
				$(this).html("");
				
				if( date_arr[0] !== undefined ) {
					$(this).append('<span class="date">' + date_arr[0] + '</span>');
				}
				
				if( date_arr[1] !== undefined ) {
					$(this).append('<span class="month">' + date_arr[1] + '</span>');
				}
				
				if( date_arr[2] !== undefined ) {
					$(this).append('<span class="year">' + date_arr[2] + '</span>');
				}
			}
		});
		
		/* Testimonial */
		$(".tpath-testimonial.slide").find(".item:first").addClass("active");
		$(".tpath-testimonial.slide").find(".carousel-indicators li:first").addClass("active");
			
		$('.widget_categories').find("ul:not(.children)").each(function() {
			$(this).addClass("categories");
		});	
	
		var cat_item = 1;	
		$('.sidebar .widget_categories').find("ul.categories > li").each(function() {
			if( cat_item == 5 ) {
				cat_item = 1;
			}
			$(this).addClass("category-item-" + cat_item);
			cat_item++;
			
			if( ! $(this).hasClass( "current-cat-parent" ) ) {
				if( $(this).find("ul.children > li").hasClass( "current-cat" ) ) {
					$(this).addClass( "current-parent" );
				}
			}
		});
			
		/* Animation */	
		$('.animated').appear(function() {
			var elem = $(this);
			var animation = elem.data('animation');		
			if ( !elem.hasClass('visible') ) {
				var animationDelay = elem.data('animation-delay');
				if ( animationDelay ) {
		
					setTimeout(function(){
						elem.addClass( animation + " visible" );					
					}, animationDelay);			
		
				} else {
					elem.addClass( animation + " visible" );
				}
			}		
		});	
		
		// Contact Form
		$('.tpath-contact-form').each(function(){
			var contact_form_id = $(this).attr('id');
			$('#' + contact_form_id).bootstrapValidator({
				container: 'tooltip',
				message: 'This value is not valid',
				feedbackIcons: {
					valid: 'glyphicon glyphicon-ok',
					invalid: 'glyphicon glyphicon-remove',
					validating: 'glyphicon glyphicon-refresh'
				},
				fields: {				
					contact_name: {                
						validators: {
							notEmpty: {
								message: 'The name is required and cannot be empty'
							}
						}
					},
					contact_last_name: {                
						validators: {
							notEmpty: {
								message: 'The name is required and cannot be empty'
							}
						}
					},
					contact_email: {
						validators: {
							notEmpty: {
								message: 'The email address is required'
							},
							emailAddress: {
								message: 'The input is not a valid email address'
							}
						}
					},
					contact_phone: {
						validators: {					
							notEmpty: {
								message: 'Phone is required'
							}
						}
					},
					contact_message: {
						validators: {
							notEmpty: {
								message: 'Message is required'
							}                    
						}
					}
				}
			}).on('success.form.bv', function(e) {
												
				e.preventDefault();
				
				var $form        = $(e.target),
					validator    = $form.data('bootstrapValidator'),
					submitButton = validator.getSubmitButton();
				
				$('#' + contact_form_id).addClass('ajax-loader');
				
				var data = $('#' + contact_form_id).serialize();
				
				$.ajax({
					url: ajaxurl,
					type: "POST",
					dataType: 'json',
					data: data + '&action=greenture_sendmail',
					success: function (msg) {
						$('#' + contact_form_id).removeClass('ajax-loader');
						if( msg.status == 'true' ) {
							$('.tpath-form-success').html( '<i class="glyphicon glyphicon-ok"></i> Thank you ' +msg.data+ '. Your Email was successfully sent!');
							$('.tpath-form-success').show();
							submitButton.removeAttr("disabled");
							resetForm( $('#' + contact_form_id));
						} else if( msg.status == 'false' ) {
							$('.tpath-form-error').html( '<i class="glyphicon glyphicon-remove"></i> Sorry ' +msg.data+ '. Your Email was not sent. Resubmit form again Please..');
							$('.tpath-form-error').show();
							submitButton.removeAttr("disabled");
							resetForm( $('#' + contact_form_id) );
						}
					}
				});
				return false;        
			});
		});
		
		$('.tpath-mailchimp-form').each(function(){
			$(this).bootstrapValidator({
				container: 'tooltip',
				message: '',
				feedbackIcons: {
					valid: 'fa fa-check',
					invalid: 'fa fa-times',
					validating: 'fa fa-refresh'
				},
				fields: {            
					subscribe_email: {
						validators: {
							notEmpty: {
								message: 'The email address is required'
							},
							emailAddress: {
								message: 'The input is not a valid email address'
							}
						}
					}			
				}
			});
		});
		
		if(Modernizr.mq('only screen and (max-width: 991px) and (min-width: 768px)')) {
			$('.main-section').find('.woocommerce-products.products').each(function() {
				if( $(this).hasClass( 'products-4' ) || $(this).hasClass( 'products-5' ) ) {
					$(this).each(function(){
						var currentTallest = 0;
						$(this).children().each(function(){
							if( $(this).height() > currentTallest) { currentTallest = $(this).height() + 2; }
						});
						if( Number.prototype.pxToEm ) {
							currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
						}
						// for ie6, set height since min-height isn't supported
						if( $.browser.msie && $.browser.version === 6.0 ) {
							(this).children().css({'height': currentTallest});
						}
						$(this).children().css({'min-height': currentTallest});
					});
				}
			});
		}
	
	})(jQuery);
	
	/* ===================
	Video Script
	=================== */
	$('.wrapper-class').find(".tpath-yt-player").each(function(){
		$(this).mb_YTPlayer();
	});
	
	/* ======================== Day Counter ======================== */
	(function($) { 
		"use strict";
		$('.tpath-daycounter').each(function(){
			var counter_id = $(this).attr('id');
			var counter_type = $(this).data('counter');
			var year = $(this).data('year');
			var month = $(this).data('month');
			var date = $(this).data('date');
			
			var countDay = new Date();
			countDay = new Date(year, month - 1, date);
			
			if( counter_type == "down" ) {
				$("#"+counter_id).countdown({
					labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
					labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
					until: countDay
				});
			} else if( counter_type == "up" ) {
				$("#"+counter_id).countdown({
					labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
					labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
					since: countDay
				});
			}
			
		});
	})(jQuery);	
	
	/* =============================
	   Related Services Slider
	============================= */
	if( document.getElementsByClassName("related-service-slider") ){
		var owl = jQuery(".related-service-slider");
		  owl.owlCarousel({
				items: 2,
				dots: false,
				autoplay:true,
				loop:true,
				margin:30,
				nav: true,
				navText: [ 
					'<span class="fa fa-angle-left"></span>',
					'<span class="fa fa-angle-right"></span>'
				],
		  });
	}
	
}); //End document ready function

function resetForm(form) {
	form.find('input:text, input:password, input, input:file, select, textarea').val('');
	form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');		
	form.find('input:text, input:password, input, input:file, select, textarea, input:radio, input:checkbox').parent().find('.form-control-feedback').hide();
}

function stickyHeaderInit(){
	if( jQuery('body').hasClass('header-sticky-enabled') ) {
		var spacing = 0,
		stickyHeader = jQuery('.header-main-section'),
		headerWrap = jQuery('.header-section');

		if(jQuery('#wpadminbar').length > 0) {
			spacing = 32;
		}
		
		stickyHeader.sticky({
			topSpacing: spacing
		});

		jQuery(window).smartresize( function() {
			stickyHeader.sticky('update');
		});

		if( jQuery('body').hasClass('boxed') ) {
			jQuery('.header-main-section').css('max-width', headerWrap.width());
			jQuery(window).smartresize( function() {
				jQuery('.header-main-section').css('max-width', headerWrap.width());
			});
		}
		
		var lastTop = 0;

		jQuery(window).scroll(function(event){
			var currentTop = jQuery(this).scrollTop();
			var headerHide = 800;
			
			if( currentTop > lastTop && currentTop > headerHide ){
				jQuery('.header-main-section').addClass('sticky-header-hide');
			} else if( jQuery('.header-main-section').hasClass('sticky-header-hide') ) {
			   jQuery('.header-main-section').removeClass('sticky-header-hide');
			}
			lastTop = currentTop;
		});
		
	}
}

function greenture_PortfolioInit(){
	jQuery('.tpath-portfolio').each(function(){
		
		var $this = jQuery(this);
		var $portfolio_container = $this.find('.portfolio-container');
		var $item = $portfolio_container.find('.portfolio-item').eq(0);
		
		if(Modernizr.mq('only screen and (min-width: 768px)')) {
			
			$portfolio_container.imagesLoaded(function(){
				var columns = Math.floor( $this.attr('data-columns') );
				var gutterSize = Math.floor( $this.attr('data-gutter') );
				
				var masonryGutter = 0;
				
				if( columns == 2 && gutterSize != 0 ) {
					masonryGutter = gutterSize / columns;
				} else if( columns == 3 && gutterSize != 0 ) {
					var colValue = gutterSize / 2;
					masonryGutter = colValue + ( colValue / 3 );					
				} else if( columns == 4 && gutterSize != 0 ) {
					var colValue = gutterSize / 2;
					masonryGutter = colValue + ( colValue / 2 );					
				}
				
				if(Modernizr.mq('only screen and (max-width: 800px)')) {
					if( columns == 4 ) {
						columns = 3;
					}
				}
				
				// calculate columnWidth
				var colWidth = Math.floor( $portfolio_container.width() / columns );		
				var masonryWidth = Math.floor( colWidth - masonryGutter );
				
				$portfolio_container.find('.portfolio-item').css('width', masonryWidth);
				$portfolio_container.find('.portfolio-item').css('margin-bottom', gutterSize );
				
				var selector = $portfolio_container.find('.portfolio-tabs a.active').data('filter');
				
				$portfolio_container.isotope({
				  resizable: false,
				  filter: selector,
				  animationEngine: "css",
				  masonry: {
					columnWidth: masonryWidth,
					gutter: gutterSize
				  }
				});
			});					
		}
	
		if(Modernizr.mq('only screen and (max-width: 767px)')) {
			$portfolio_container.imagesLoaded(function(){
				var gutterSize = Math.floor( $this.attr('data-gutter') );
							
				$portfolio_container.find('.portfolio-item').css('width', '100%');
				$portfolio_container.find('.portfolio-item').css('margin-bottom', gutterSize );
				
				var selector = $portfolio_container.find('.portfolio-tabs a.active').data('filter');
				
				$portfolio_container.isotope({
					resizable: false,
					filter: selector,
				 	animationEngine: "css",
					masonry: {
						columnWidth: '.portfolio-item',
						gutter: 0
					}
				});
			});
		}
	 
		// Portfolio Filter Items
		jQuery(document).on( 'click', '.portfolio-tabs a', function( event ){
			event.preventDefault();
			
			jQuery(this).parents('.portfolio-tabs').find('a.active').removeClass('active');				
			jQuery(this).addClass('active');
			var selector = jQuery(this).parents('.portfolio-tabs').find('a.active').attr('data-filter');		
			jQuery(this).closest('.tpath-portfolio').find('.portfolio-container').isotope({ filter: selector, animationEngine : "css" });
			
			return false; 
		});
	});
}


function greenture_teamInit(){
	jQuery('.tpath-team-grid').each(function(){
		
		var $this = jQuery(this);
		var $team_container = $this.find('.team-container');
		var $item = $team_container.find('.team-item').eq(0);
		
		if(Modernizr.mq('only screen and (min-width: 768px)')) {
			
			$team_container.imagesLoaded(function(){
				var columns = Math.floor( $this.attr('data-columns') );
				var gutterSize = Math.floor( $this.attr('data-gutter') );
				
				var masonryGutter = 0;
				
				if( columns == 2 && gutterSize != 0 ) {
					masonryGutter = gutterSize / columns;
				} else if( columns == 3 && gutterSize != 0 ) {
					var colValue = gutterSize / 2;
					masonryGutter = colValue + ( colValue / 3 );					
				} else if( columns == 4 && gutterSize != 0 ) {
					var colValue = gutterSize / 2;
					masonryGutter = colValue + ( colValue / 2 );					
				}
				
				if(Modernizr.mq('only screen and (max-width: 800px)')) {
					if( columns == 4 ) {
						columns = 2;
						if( gutterSize != 0 ) {
							masonryGutter = gutterSize / columns;
						}
					}
				}
				
				// calculate columnWidth
				var colWidth = Math.floor( $team_container.width() / columns );		
				var masonryWidth = Math.floor( colWidth - masonryGutter );
				
				$team_container.find('.team-item').css('width', masonryWidth);
				$team_container.find('.team-item').css('margin-bottom', gutterSize );
				
				var selector = $team_container.find('.team-tabs a.active').data('filter');
				
				$team_container.isotope({
				  resizable: false,
				  filter: selector,
				  animationEngine: "css",
				  masonry: {
					columnWidth: masonryWidth,
					gutter: gutterSize
				  }
				});
			});					
		}
	
		if(Modernizr.mq('only screen and (max-width: 767px)')) {
			$team_container.imagesLoaded(function(){
				var gutterSize = Math.floor( $this.attr('data-gutter') );
				
				// calculate columnWidth
				var masonryWidth = Math.floor( $team_container.width() );
				
				$team_container.find('.team-item').css('width', '100%');
				$team_container.find('.team-item').css('margin-bottom', gutterSize );
				
				var selector = $team_container.find('.team-tabs a.active').data('filter');
				
				$team_container.isotope({
					resizable: false,
					filter: selector,
				 	animationEngine: "css",
					masonry: {
						columnWidth: masonryWidth,
						gutter: 0
					}
				});
			});
		}

		// Team Filter Items
		jQuery(document).on( 'click', '.team-tabs a', function( event ){
			event.preventDefault();
			
			jQuery(this).parents('.team-tabs').find('a.active').removeClass('active');				
			jQuery(this).addClass('active');
			var selector = jQuery(this).parents('.team-tabs').find('a.active').attr('data-filter');		
			jQuery(this).closest('.tpath-team-grid').find('.team-container').isotope({ filter: selector, animationEngine : "css" });
			
			return false; 
		});
		
	});
}

function initBlogSlider() {
    "use strict";
								
	jQuery('.owl-carousel.blog-carousel-slider').each( function() {
		var $carousel = jQuery( this );
		$carousel.owlCarousel( {
			dots            : false,
			items           : 1,
			slideBy         : 1,
			loop            : false,			
			nav             : true,
			autoplay        : $carousel.data( "autoplay" ),
			autoplayTimeout : $carousel.data( "autoplay-timeout" ),
			navText         : [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
			animateOut 		: $carousel.data( "animate-out" ),
			animateIn 		: $carousel.data( "animate-in" ),
			smartSpeed 		: $carousel.data( "smart-speed" ),
			fallbackEasing 	: 'easeInOutExpo',
			responsive      : {
				0: {
					items   : 1
				},
				480: {
					 items  : 1
				},
				768: {
					items   : 1
				},
				980: {
					items   : 1
				}
			}
		} );
	} );
}

function greenture_initBlogGrid() {
		
	if(Modernizr.mq('only screen and (min-width: 1025px)')) {
		jQuery('.grid-col-2').imagesLoaded( function() {
			var gridwidth = Math.floor( jQuery('.grid-col-2').width() / 2 );
			var masonryWidth = Math.floor( gridwidth - 15 );
			jQuery('.grid-col-2 .grid-posts').css('width', masonryWidth);
					
			jQuery('.grid-col-2').masonry({
				itemSelector: '.grid-posts',
				columnWidth: masonryWidth,
				gutter: 30
			});
			
			jQuery('.grid-col-2').find('.owl-carousel.blog-carousel-slider').each(function(){
				initBlogSlider();
			});
			jQuery('.grid-col-2').masonry();
		});	
		
		jQuery('.grid-col-3').imagesLoaded( function() {
			var gridwidth = Math.floor( jQuery('.grid-col-3').width() / 3 );
			var masonryWidth = Math.floor( gridwidth - 20 );	
			jQuery('.grid-col-3 .grid-posts').css('width', masonryWidth);
			
			jQuery('.grid-col-3').masonry({
				itemSelector: '.grid-posts',
				columnWidth: masonryWidth,
				gutter: 30
			});			
			
			jQuery('.grid-col-3').find('.owl-carousel.blog-carousel-slider').each(function(){
				initBlogSlider();
			});
			jQuery('.grid-col-3').masonry();
		});
		
		jQuery('.grid-col-4').imagesLoaded( function() {
			var gridwidth = Math.floor( jQuery('.grid-col-4').width() / 4 );
			var masonryWidth = Math.floor( gridwidth - 22.5 );
			jQuery('.grid-col-4 .grid-posts').css('width', masonryWidth);
			
			jQuery('.grid-col-4').masonry({
				itemSelector: '.grid-posts',
				columnWidth: masonryWidth,
				gutter: 30
			});
		
			jQuery('.grid-col-4').find('.owl-carousel.blog-carousel-slider').each(function(){
				initBlogSlider();
			});
			jQuery('.grid-col-4').masonry();
		});
	}
	
	if(Modernizr.mq('only screen and (max-width: 1024px) and (min-width: 768px)')) {
		if( jQuery('body').hasClass( 'three-col-middle' ) || jQuery('body').hasClass( 'three-col-right' ) || jQuery('body').hasClass( 'three-col-left' ) ) {
			jQuery('.three-col-middle .grid-col-2 .grid-posts, .three-col-right .grid-col-2 .grid-posts, .three-col-left .grid-col-2 .grid-posts, .three-col-middle .grid-col-3 .grid-posts, .three-col-right .grid-col-3 .grid-posts, .three-col-left .grid-col-3 .grid-posts, .three-col-middle .grid-col-4 .grid-posts, .three-col-right .grid-col-4 .grid-posts, .three-col-left .grid-col-4 .grid-posts').imagesLoaded( function() {
				jQuery('.three-col-middle .grid-col-2 .grid-posts, .three-col-right .grid-col-2 .grid-posts, .three-col-left .grid-col-2 .grid-posts, .three-col-middle .grid-col-3 .grid-posts, .three-col-right .grid-col-3 .grid-posts, .three-col-left .grid-col-3 .grid-posts, .three-col-middle .grid-col-4 .grid-posts, .three-col-right .grid-col-4 .grid-posts, .three-col-left .grid-col-4 .grid-posts').css('width', '100%');
				jQuery('.three-col-middle .grid-col-2, .three-col-right .grid-col-2, .three-col-left .grid-col-2, .three-col-middle .grid-col-3, .three-col-right .grid-col-3, .three-col-left .grid-col-3, .three-col-middle .grid-col-4, .three-col-right .grid-col-4, .three-col-left .grid-col-4').isotope({
					resizable: false,
					masonry: {
						columnWidth: '.grid-posts',
						gutter: 0
					}
				});
				
				jQuery('.three-col-middle .grid-col-2, .three-col-right .grid-col-2, .three-col-left .grid-col-2, .three-col-middle .grid-col-3, .three-col-right .grid-col-3, .three-col-left .grid-col-3, .three-col-middle .grid-col-4, .three-col-right .grid-col-4, .three-col-left .grid-col-4').find('.owl-carousel.blog-carousel-slider').each(function(){
					initBlogSlider();
				});
				jQuery('.three-col-middle .grid-col-2, .three-col-right .grid-col-2, .three-col-left .grid-col-2, .three-col-middle .grid-col-3, .three-col-right .grid-col-3, .three-col-left .grid-col-3, .three-col-middle .grid-col-4, .three-col-right .grid-col-4, .three-col-left .grid-col-4').masonry();
			});
		} else {
			
			jQuery('.grid-col-2 .grid-posts, .grid-col-3 .grid-posts, .grid-col-4 .grid-posts').imagesLoaded( function() {
				var gridwidth = Math.floor( jQuery('.grid-col-2, .grid-col-3, .grid-col-4').width() / 2 );
				var masonryWidth = Math.floor( gridwidth - 15 );
				
				jQuery('.grid-col-2 .grid-posts, .grid-col-3 .grid-posts, .grid-col-4 .grid-posts').css('width', masonryWidth);
				jQuery('.grid-col-2, .grid-col-3, .grid-col-4').masonry({
					itemSelector: '.grid-posts',
					columnWidth: masonryWidth,
					gutter: 30
				});
				
				jQuery('.grid-col-2, .grid-col-3, .grid-col-4').find('.owl-carousel.blog-carousel-slider').each(function(){
					initBlogSlider();
				});
				jQuery('.grid-col-2, .grid-col-3, .grid-col-4').masonry();
			
			});
			
		}
	}	
	
	if(Modernizr.mq('only screen and (max-width: 767px)')) {
		jQuery('.grid-col-2 .grid-posts, .grid-col-3 .grid-posts, .grid-col-4 .grid-posts').imagesLoaded( function() {
			jQuery('.grid-col-2 .grid-posts, .grid-col-3 .grid-posts, .grid-col-4 .grid-posts').css('width', '100%');
			jQuery('.grid-col-2, .grid-col-3, .grid-col-4').masonry({
				itemSelector: '.grid-posts',
				columnWidth: '.grid-posts',
				gutter: 0
			});
			
			jQuery('.grid-col-2, .grid-col-3, .grid-col-4').find('.owl-carousel.blog-carousel-slider').each(function(){
				initBlogSlider();
			});
			jQuery('.grid-col-2, .grid-col-3, .grid-col-4').masonry();
		});
	}
}

function greenture_Tweets_Slider() {
	jQuery('.tpath-twitter-slide').each(function() {
		var visible = jQuery(this).data('visible');
		jQuery('.tpath-twitter-slide').easyTicker({
			direction: 'up',
			speed: 'slow',
			interval: 3000,
			height: 'auto',
			visible: visible,
			mousePause: 0
		});	
	});
}

function greenture_Testimonials_Slider() {
	jQuery('.testimonial-ticker-slider').each(function() {
		jQuery('.testimonial-ticker-slider').easyTicker({
			direction: 'up',
			speed: 'slow',
			interval: 3000,
			height: 'auto',
			visible: 2,
			mousePause: 0
		});	
	});
}

jQuery(document).ajaxComplete(function(event, xhr, settings) {
	greenture_ajax_complete();
});

function greenture_ajax_complete() {	
	greenture_CartRemoveItem();
}

/* ======================== Woocommerce Ajax Mini Cart Remove ======================== */

function greenture_CartRemoveItem() {
	jQuery('.woo-cart-item .remove-cart-item').unbind('click').click(function(){
		var $this = jQuery(this);
		var cart_id = $this.data("cart_id");
		$this.parent().find('.ajax-loading').show();

		jQuery.ajax({
			type: 'POST',
			dataType: 'json',
			url: greenture_js_vars.greenture_ajax_url,
			data: { action: "greenture_product_remove",
				cart_id: cart_id
			},success: function( response ) {
				var fragments = response.fragments;
				var cart_hash = response.cart_hash;

				if ( fragments ) {
					jQuery.each(fragments, function(key, value) {
						jQuery(key).replaceWith(value);
					});
				}
			}
		});
		return false;
	});
}
/* ======================== Google Map ======================== */
window.onload = MapLoadScript;
var google;
function GmapInit() {
	  Gmap = jQuery('.gmap_canvas');
	  Gmap.each(function() {		
		var $this           = jQuery(this),
			zoom            = 12,
			scrollwheel     = false,
			zoomcontrol 	= true,
			draggable       = true,
			mapType         = google.maps.MapTypeId.ROADMAP,
			title           = '',
			contentString   = '',
			dataAddress     = $this.data('address'),
			dataZoom        = $this.data('zoom'),
			dataType        = $this.data('type'),
			dataScrollwheel = $this.data('scrollwheel'),
			dataZoomcontrol = $this.data('zoomcontrol'),
			dataHue         = $this.data('hue'),
			dataSaturation  = $this.data('saturation'),
			dataLightness   = $this.data('lightness');
			
		var latlngArray = dataAddress.split(',');
		var lat = parseFloat(latlngArray[0]);
		var lng = parseFloat(latlngArray[1]);
				
		if( dataZoom !== undefined && dataZoom !== false ) {
			zoom = parseFloat(dataZoom);
		}
		if( dataScrollwheel !== undefined && dataScrollwheel !== null ) {
			scrollwheel = dataScrollwheel;
		}
		if( dataZoomcontrol !== undefined && dataZoomcontrol !== null ) {
			zoomcontrol = dataZoomcontrol;
		}
		if( dataType !== undefined && dataType !== false ) {
			if( dataType == 'satellite' ) {
				mapType = google.maps.MapTypeId.SATELLITE;
			} else if( dataType == 'hybrid' ) {
				mapType = google.maps.MapTypeId.HYBRID;
			} else if( dataType == 'terrain' ) {
				mapType = google.maps.MapTypeId.TERRAIN;
			}		  	
		}
		
		if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
			draggable = false;
		}
		
		var mapOptions = {
		  zoom        : zoom,
		  scrollwheel : scrollwheel,
		  zoomControl : zoomcontrol,
		  draggable   : draggable,
		  center      : new google.maps.LatLng(lat, lng),
		  mapTypeId   : mapType
		};		
		var map = new google.maps.Map($this[0], mapOptions);
		
		var show_marker = $this.data('marker');
		var image = $this.data('markerimg');
		
		var contents    = $this.data('content');
		var titles 		= $this.data('title');
		
		if( ( contents !== undefined && contents !== false ) || ( titles !== undefined && titles !== false ) ) {
			var contentArray = contents.split('|');
			var titleArray   = titles.split(',');
		}
		
		var addresses    = $this.data('addresses');
		if( show_marker !== undefined && show_marker == 'yes' ) {
			if( addresses !== undefined && addresses !== '' ) {
				var addressArray = addresses.split('|');
				var address = [];
				
				for (var i = 0; i < addressArray.length; i++) {
					address[i] = addressArray[i];
					var latlngArray = address[i].split(',');
					var lat1 = parseFloat(latlngArray[0]);
					var lng1 = parseFloat(latlngArray[1]);
					
					var marker = new google.maps.Marker({
					  position : new google.maps.LatLng(lat1, lng1),
					  map      : map,
					  icon     : image,
					  title    : titleArray[i]
					});
					
					if( contents !== undefined && contents !== '' ) {
						marker.content = '<div class="map-data">';
						marker.content += '<h6>' + titleArray[i] + '</h6>';
						marker.content += '<div class="map-content">';
						var contentNew = contentArray[i].split(',');
						
						for (var j = 0; j < contentNew.length; j++) {
							if( j == 0 ) {
								marker.content += contentNew[j];
							} else {
								marker.content += '<br>' + contentNew[j];
							}
						}
						marker.content += '</div>' + '</div>';
						
						marker.info = new google.maps.InfoWindow();
						google.maps.event.addListener(marker, 'click', function() {
							marker.info.setContent(this.content);
							marker.info.open(this.getMap(), this);
						});
					}
				}
			} else {
				var marker = new google.maps.Marker({
				  position : new google.maps.LatLng(lat, lng),
				  map      : map,
				  icon     : image
				});
				
				if( contents !== undefined && contents !== '' ) {
					marker.content = '<div class="map-data">' + '<h6>' + titles + '</h6>' + '<div class="map-content">' + contents + '</div>' + '</div>';
				}
				var d_infowindow = new google.maps.InfoWindow();
				
				if( contents !== undefined && contents !== '' ) {
					google.maps.event.addListener(marker, 'click', function() {
						d_infowindow.setContent(this.content);
						d_infowindow.open(this.getMap(), this);
					});
				}
			}
		}
		
		if( dataHue !== undefined && dataHue !== '' ) {
		  var styles = [
			{
			  stylers : [
				{ hue : dataHue },
				{ saturation: dataSaturation },
				{ lightness: dataLightness }
			  ]
			}
		  ];
		  map.setOptions({styles: styles});
		}
	 });
}
	
function MapLoadScript() {
	if( typeof google !== 'undefined' && typeof google === 'object' ) {
		if( typeof google.maps === 'object' ) {
			GmapInit();
		}
	}
}