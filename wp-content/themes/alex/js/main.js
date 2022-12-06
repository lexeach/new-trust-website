$(document).ready(function() {
	
	

		
	
var m_mobile_active = false;

	
$('.hamburger').click(function() {
	if(m_mobile_active === false){
	$('.main_nav').addClass('onmenu2');
    $(".nav-icon").toggleClass('open');
    $('.mobile_menu').removeClass('closed_menu');
    $('.mobiel_footers').addClass('offfoeter3');
    m_mobile_active = true;
	return false; 
	}
	if(m_mobile_active === true){
    $('.main_nav').removeClass('onmenu2');
	$(".nav-icon").toggleClass('open');
    $('.mobile_menu').addClass('closed_menu');
    $('.mobiel_footers').removeClass('offfoeter3');
    m_mobile_active = false;
	return false; 
	}
});	
		
$('.faqqs2').click(function() {
	$('html, body').animate({
    scrollTop: $("#faqs2").offset().top -50
    }, 500);
	$(".nav-icon").removeClass('open');
    $('.mobile_menu').addClass('closed_menu');
    $('.main_nav').removeClass('onmenu2');
    $('.mobiel_footers').removeClass('offfoeter3');
    m_mobile_active = false;
	return false; 
});	
	
$('.wpps2').click(function() {
	$('html, body').animate({
    scrollTop: $(".wpps2s").offset().top -100
    }, 500);
	$(".nav-icon").removeClass('open');
    $('.mobile_menu').addClass('closed_menu');
    $('.main_nav').removeClass('onmenu2');
    $('.mobiel_footers').removeClass('offfoeter3');
    m_mobile_active = false;
	return false; 
});		
	
	
	
document.addEventListener( 'wpcf7invalid', function( event ) {
if(event.detail.contactFormId == '8') {
	
$('#forms2 .wpcf7-not-valid').addClass('exclaims');
$('#forms2 .wpcf7-submit').val('Submit');
$('#forms22 .wpcf7-not-valid').addClass('exclaims');
$('#forms22 .wpcf7-submit').val('Submit');	
}
	
if(event.detail.contactFormId == '476') {
	
$('#forms1 .wpcf7-not-valid').addClass('exclaims');
$('#forms1 .wpcf7-submit').val('Submit');	
	
}
}, false );
	
$(".sings").focus(function(){
$(this).removeClass('exclaims');
});	
var contactTopPosition = $(".whitepapers").position().top -100;
var contactTopPosition2 = $(".faqhead").position().top -100;
	
	
$('.faqqs').click(function() {  
$('html, body').animate({
scrollTop: $("#faqs").offset().top
}, 500);
$(".scrollller").animate({scrollTop: contactTopPosition2}, 500);
		$('.menu_btn').removeClass('menu_btnactives');
		$('.faqqs').addClass('menu_btnactives');	
});	

$('.wpps').click(function() {  
 $('html, body').animate({
scrollTop: $("#wpps").offset().top
}, 500);
$(".scrollller").animate({scrollTop: contactTopPosition}, 500);
$('.menu_btn').removeClass('menu_btnactives');
$('.wpps').addClass('menu_btnactives');
});	

$('.scrollller').on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 300) {
        $('.menu_btn').removeClass('menu_btnactives');
		$('.wpps').addClass('menu_btnactives');
        }else if($(this).scrollTop() + $(this).innerHeight() < $(this)[0].scrollHeight - 200) {
		$('.menu_btn').removeClass('menu_btnactives');
		$('.faqqs').addClass('menu_btnactives');	
        }
    });
$(document).scroll(function() {

        if ( $(document).scrollTop() <= 8000 ) {
		$('.menu_btn').removeClass('menu_btnactives');
		}
    });
	
	
$('.faq_clickers').click(function() {  
 if ( $( this ).parent('.faq_block').hasClass( "closeds" ) ) {
	
 $('.faq_block').addClass('closeds');
 $(this).parent('.faq_block').removeClass('closeds');
	}else{
 $('.faq_block').addClass('closeds');

	}
 });	
	
	
$('.thank_you').hide();	
	
$('#forms1 .wpcf7-submit').click(function(){	
$('#forms1 .wpcf7-submit').val('Sending...');
	
});	
	
$('#forms2 .wpcf7-submit').click(function(){	
$('#forms2 .wpcf7-submit').val('Sending...');
$('#forms22 .wpcf7-submit').val('Sending...');
});	
	
$('#forms22 .wpcf7-submit').click(function(){	
$('#forms22 .wpcf7-submit').val('Sending...');
$('#forms2 .wpcf7-submit').val('Sending...');
});		
	
document.addEventListener( 'wpcf7mailsent', function( event ) {
if(event.detail.contactFormId == '8') {
	
$('#forms2 .inputs, #forms2 .mainss').hide();
$('#forms2 .thank_you').show();	
$('#forms22 .inputs, #forms22 .mainss').hide();
$('#forms22 .thank_you').show();		
	
}
	
if(event.detail.contactFormId == '476') {
	
$('#forms1 .inputs, #forms1 .mainss').hide();
$('#forms1 .thank_you').show();	
	
}	

}, false );		
	
$(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $('.reverse_scales').addClass('reverseit');
            $('.scalein').addClass('scaldeon');
        }
        else {
            $('.reverse_scales').removeClass('reverseit');
            $('.scalein').removeClass('scaldeon');
        }
    });	
	
$(window).scroll(function() {
        if ($(document).scrollTop() > 1100) {
            $('.main_nav').addClass('onmenu');
            $('.mobiel_footers').removeClass('offfoeter');
        }
        else if  ($(document).scrollTop() <= 1100) {
            $('.main_nav').removeClass('onmenu');
            $('.mobiel_footers').addClass('offfoeter');
        }
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            $('.mobiel_footers').addClass('offfoeter2');
   }else{
            $('.mobiel_footers').removeClass('offfoeter2');
   }
    });	
	
setTimeout(function(){
$('.covers').fadeOut(1000);
setTimeout(function(){
$('.main_logo').removeClass('hiddens');
}, 250);
}, 450);
	
$('.launch_btn, .singipss').click(function() { 
$('.pop-ip ').removeClass('hiddens');
$(".nav-icon").removeClass('open');
$('.mobile_menu').addClass('closed_menu');
$('.main_nav').removeClass('onmenu2');
$('.mobiel_footers').removeClass('offfoeter3');	
m_mobile_active = false;
return false; 	
});		
$('.sign_up').click(function() { 
$("html, body").animate({ scrollTop: $(document).height() }, "slow");
$(".scrollller").animate({ scrollTop: $(document).height() }, "slow");
$(".nav-icon").removeClass('open');
$('.mobile_menu').addClass('closed_menu');
$('.main_nav').removeClass('onmenu2');
$('.mobiel_footers').removeClass('offfoeter3');	
m_mobile_active = false;
return false;
});	
$('.pop-close, .pop-bg, .cloose_btn').click(function() { 
$('.pop-ip ').addClass('hiddens');	
});		
var $animation_elements = $('.animation-element'); 
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top +300;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }else{
      $element.removeClass('in-view');
	} 
  });
}
	
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');		
		
	
});		