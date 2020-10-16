// Performance revolution section (make first active hover, if remaining hovered, then remaining become active hovered)
$('.top-image').on('mouseover', function() {
  $('.top-image').removeClass('active');
  $(this).addClass('active');
});

// for touch swipe
(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft()}else{config.wipeRight()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);

// Top navigation blocks underneath issue
// $(window).resize(function () {
    // $('body').css('padding-top', parseInt($('#main-navbar').css("height"))+10);
// });

// $(window).load(function () {
    // $('body').css('padding-top', parseInt($('#main-navbar').css("height"))+10);
// });

// Footer accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Touch become click for hover panel in products and services section
$('.panelout .panel').hover(function(){
  $(this).trigger('click');
})

// Nav bar dropdown hover in PC, click in mobile
function toggleNavbarMethod() {
  if ($(window).width() > 990) {
    $('.navbar .dropdown').on('mouseover', function() {
      $('.dropdown-toggle', this).trigger('click');
    }).on('mouseout', function() {
      $('.dropdown-toggle', this).trigger('click').blur();
    });
  } else {
    $('.navbar .dropdown').off('mouseover').off('mouseout');
  }
}
toggleNavbarMethod();
$(window).resize(toggleNavbarMethod);

// Top Carousel
$('.car').click(function(){
    switch($(this).attr('id')){
        case 'head1':
            $('.container-fluid-top').css('background-image','url("./includes/mainhead.jpg")');
				break;
        case 'head2':
            $('.container-fluid-top').css('background-image','url("./includes/perfrevhead.jpg")');
        break;
			case 'head3':
            $('.container-fluid-top').css('background-image','url("./includes/performhead.jpg")');
        break;
    }
});

// Make carousel clickable when hover on li indicators
$('.carousel-indicators  li').on('mouseover',function(){
    $(this).trigger('click');
})
document.getElementById('src1').focus();

// Performance revolution section (make first active hover, if remaining hovered, then remaining become active hovered)
$('.perfrev').on('mouseover', function() {
  $('.perfrev').removeClass('hover');
  $(this).addClass('hover');
});
// Change content in performance revolution section
$('.perfrev').mouseover(function(){
    switch($(this).attr('id')){
        case 'src1':
						$('.navpanel').css('top','0%');
            $('.container-fluid-mid').css('background-image','url("./includes/rev.jpg")');
            $('.container-fluid-mid').css('background-repeat','no-repeat');
            $('.container-fluid-mid').css('background-size','cover');
            $('.container-fluid-mid').css('height','587px');
            document.getElementById("perfrev-content-h").innerHTML = "With the advancement of technologies such as high performance computing, mobile technologies, 4G network and fibre channels, users are demanding speedier delivery and richer content applications. The 8 seconds response time in what previously has been set as industry benchmark three years back, has been significantly adjusted in recent years, with the latest study shown that user expected response time is at 3 seconds.";
            document.getElementById("perfrev-content-p").innerHTML = "IT teams who are already facing challenges on increased complexity in application delivery chain due to emerging new platforms, virtualisation, cloud technologies, the ever-increasing business requirements and daily firefighting, are still expected to meet the 3 seconds response time. Moving forward, the revolution will continue, with technology continues to diversify into new regions and users demanding for faster performing and richer experience applications.";
        break;
        case 'src2':
						$('.navpanel').css('top','25%');
            $('.container-fluid-mid').css('background-image','url("./includes/win.jpg")');
						$('.container-fluid-mid').css('background-repeat','no-repeat');
            $('.container-fluid-mid').css('background-size','cover');
            $('.container-fluid-mid').css('height','587px');
						document.getElementById("perfrev-content-h").innerHTML = "We believe organisations that have taken control and triumphed in this revolution have employed, either individually or in some combination of the following moves:";
						document.getElementById("perfrev-content-p").innerHTML = "&#9658;&nbsp&nbspCreating a dedicated team on managing application performance and handling incidents<br>&#9658;&nbsp&nbspComplete visibility on all application delivery chains<br>&#9658;&nbsp&nbspHaving the right solutions in isolating and diagnosing problems<br>&#9658;&nbsp&nbspApply methodological approach to improve user experience<br>&#9658;&nbsp&nbspEstablish close partnership with vendors";
        break;
				case 'src3':
						$('.navpanel').css('top','50%');
            $('.container-fluid-mid').css('background-image','url("./includes/key.jpg")');
						$('.container-fluid-mid').css('background-repeat','no-repeat');
            $('.container-fluid-mid').css('background-size','cover');
            $('.container-fluid-mid').css('height','587px');
						document.getElementById("perfrev-content-h").innerHTML = "With shortage of resources and growing business requirements, there are several challenges that IT leaders will have to manage:";
						document.getElementById("perfrev-content-p").innerHTML = "&#9658;&nbsp&nbspGrowing complexity in application delivery chain<br>&#9658;&nbsp&nbspFocus is no longer on high availability alone, but also on performance of the applications<br>&#9658;&nbsp&nbspHaving the expertise to manage, support and monitor the multiple platforms<br>&#9658;&nbsp&nbspCapability to quickly identify and resolving application issues<br>&#9658;&nbsp&nbspApplication rollout to production without major breakdowns";

        break;
				case 'src4':
						$('.navpanel').css('top','75%');
            $('.container-fluid-mid').css('background-image','url("./includes/forward.jpg")');
						$('.container-fluid-mid').css('background-repeat','no-repeat');
            $('.container-fluid-mid').css('background-size','cover');
            $('.container-fluid-mid').css('height','587px');
						document.getElementById("perfrev-content-h").innerHTML = "With the growing demand for faster performance and better user experience applications, it is crucial for IT leaders to put in place the right practices and solutions to win the performance revolution where it helps to:";
						document.getElementById("perfrev-content-p").innerHTML = "&#9658;&nbsp&nbspImprove business productivity<br>&#9658;&nbsp&nbspEnhance brand image and reputation<br>&#9658;&nbsp&nbspGain customer loyalty";

        break;
    }
});



$(document).ready(function(){

   $("#myCarousel").touchwipe({
     wipeLeft: function() {  $("#myCarousel").carousel('next'); },
     wipeRight: function() { $("#myCarousel").carousel('prev'); },
     min_move_x: 20,
     preventDefaultEvents: false
  });

  $("#carouselPerf").touchwipe({
    wipeLeft: function() {  $("#carouselPerf").carousel('next'); },
    wipeRight: function() { $("#carouselPerf").carousel('prev'); },
    min_move_x: 20,
    preventDefaultEvents: false
 });

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
