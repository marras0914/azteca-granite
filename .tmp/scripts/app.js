$(document).foundation();
$(document).ready(function(){
     $('.landing').bxSlider({
          pager: false
     });
     $('#fullpage').fullpage({
          verticalCentered: false,
          paddingTop: '0',
          paddingBottom: '10px',

          onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 1 remove directional arrow
            if(index == 1 && direction =='down'){
                $("#arrow").removeClass("arrow");
                //alert("Going to section 2!");
            }
            else if(index == 2 && direction == 'up'){
                $("#arrow").addClass("arrow");
                //alert("Going to section 1!");
            }
            else if(nextIndex == 1 && direction == 'up'){
                $("#arrow").addClass("arrow");
                //alert("Going to section 1!");
            }
          }
     });
     $('.owl-slider').owlCarousel({
          items: 3,
          itemsDesktop : [1199,3],
          lazyLoad: true,
          navigation: true,
          mouseDrag: true,
          autoPlay: 4000,
          stopOnHover: true
     });


});

//# sourceMappingURL=app.js.map
