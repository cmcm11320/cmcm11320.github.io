(function () {
  const win = window
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.feature, .pricing-table-inner', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 100
    })

    doc.classList.add('anime-ready')
    /* global anime */
    anime.timeline({
      targets: '.hero-figure-box-05'
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: [0.05, 0.05],
      scaleY: [0, 1],
      perspective: '500px',
      delay: anime.random(0, 400)
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: 1
    }).add({
      duration: 800,
      rotateY: '-15deg',
      rotateX: '8deg',
      rotateZ: '-1deg'
    })

    anime.timeline({
      targets: '.hero-figure-box-06, .hero-figure-box-07'
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: [0.05, 0.05],
      scaleY: [0, 1],
      perspective: '500px',
      delay: anime.random(0, 400)
    }).add({
      duration: 400,
      easing: 'easeInOutExpo',
      scaleX: 1
    }).add({
      duration: 800,
      rotateZ: '20deg'
    })

    anime({
      targets: '.hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, ',
      duration: anime.random(600, 800),
      delay: anime.random(600, 800),
      rotate: [ anime.random(-360, 360), function (el) { return el.getAttribute('data-rotation') } ],
      scale: [0.7, 1],
      opacity: [0, 1],
      easing: 'easeInOutExpo'
    })
  }
}())

$(document).ready(function() {
 
	var owl = $("#owl-demo");
   
	owl.owlCarousel({
		items : 10, //10 items above 1000px browser width
		itemsDesktop : [1000,5], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,2], //2 items between 600 and 0
		itemsMobile : [600,1] // itemsMobile disabled - inherit from itemsTablet option
	});
   
	// Custom Navigation Events
	$(".next").click(function(){
	  owl.trigger('owl.next');
	})
	$(".prev").click(function(){
	  owl.trigger('owl.prev');
	})
	$(".play").click(function(){
	  owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	})
	$(".stop").click(function(){
	  owl.trigger('owl.stop');
	})
   
  });

  $(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
      autoPlay : 3000,
      stopOnHover : true,
      navigation:true,
      paginationSpeed : 1000,
      goToFirstSpeed : 2000,
      singleItem : true,
      autoHeight : true,
      transitionStyle:"fade"
    });
   
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})