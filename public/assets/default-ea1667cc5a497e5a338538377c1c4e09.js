

(function($) {


  /* ---------- HP ---------- */
  function hpParalax() {
      // Setup variables
      $window = $(window);
      $slide = $('.slide');
      $body = $('body');
      //FadeIn all sections   
      $body.imagesLoaded( function() {
          setTimeout(function() {
            // Resize sections
            adjustWindow();
            // Fade in sections
            $body.removeClass('loading').addClass('loaded');
          }, 800);
      });
      
      function adjustWindow(){
          // Init Skrollr
          if( $('.no-touch body').length ) {
              var s = skrollr.init({
                  forceHeight: false,
                  render: function(data) {
                      //Debugging - Log the current scroll position.
                      //console.log(data.curTop);
                  }
              });
          }
          // Get window size
          winH = $window.height() - 150;
          // Resize our slides
          $slide.height(winH);
          // Refresh Skrollr after resizing our sections
          if( $('.no-touch body').length ) {
              s.refresh($('.slide'));
          }
      }
  }


  /* ---------- Acivate Functions ---------- */
  if ( $('#homeContent').length ) {
    hpParalax();
  }

  if ( $('.work-indicators').length ) {

    // $('#work-carousel').on("click", function() {
    //   $(this).toggleClass('active');
    // });

    $('#work-carousel').on('slid.bs.carousel', function () {
      // $currInd = $( ".work-indicators li.active" );
      // $currInd.next( "li" ).addClass("active");  
      // if($holder.is(':last-child')) {
      //   $holder.removeClass("active");
      //   $("ol li:first").addClass("active");
      // }
      // $holder.removeClass("active");

      var indx = $(this).find(".active").index();
      $(".work-indicators li").removeClass('active');
      $(".work-indicators li").eq( indx ).toggleClass('active');

    });

  }

  if ( $('#work-carousel iframe').length ) {
    $('#work-carousel').on('slide.bs.carousel', function () {
      $(".video-container").each(function() {
        var thisID = $(this).attr('id');
        callPlayer(thisID, function() {
            callPlayer(thisID,"pauseVideo");
        });
      });
    })
  }

  //var credentials = 'AnecAmzUihC8z-UYdyKI2eLhmPCQoSp9KUeC7kQprLJNvHPl6vEZx3El_DzGGAP6';
  // latitude         : 47.443802,
  // longitude        : -122.220642,
         var map = null;

         function GetMap() {
            // Initialize the map
            map = new Microsoft.Maps.Map(document.getElementById("map-canvas"), {
              credentials:"AnecAmzUihC8z-UYdyKI2eLhmPCQoSp9KUeC7kQprLJNvHPl6vEZx3El_DzGGAP6",
              center: new Microsoft.Maps.Location(47.443802, -122.220642),
              mapTypeId: Microsoft.Maps.MapTypeId.road,
              zoom: 16,
              showMapTypeSelector:false,
              enableSearchLogo: false,
              disableZooming: true
            }); 
            map.setView({
              center: new Microsoft.Maps.Location(47.443802, -122.220642),
              centerOffset: new Microsoft.Maps.Point(-200,0) 
            });

            //Pushpin
            var pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(47.443802, -122.220642));
            pin.setOptions({
                width: 32, 
                height: 32,
                visible : true,
                typeName: 'mypin'
            });

            //set Title and desc of the pushpin
            // pin.Title = "gluten free studios";
            // pin.Description = "259 SW 41st St, Renton, WA 98057";

            //create info box
            infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(47.443802, -122.220642), {
              visible: true,
              offset: new Microsoft.Maps.Point( 10, 20),
              height:110,
              showCloseButton: false,
              title: pin.Title,
              description: pin.Description
            });
            //add to entity list
            map.entities.push(infobox);


            //Add events
            Microsoft.Maps.Events.addHandler(pin, 'mouseup', displayInfobox);
            //Microsoft.Maps.Events.addHandler(pin, 'mouseover', displayInfobox);
            //Microsoft.Maps.Events.addHandler(pin, 'mouseout', displayInfoboxClose); 

            //add pushpin to entry list
            map.entities.push(pin);

            //  Event Show Bing Maps Tooltip
            function displayInfobox(e) {
              if (e.targetType == 'pushpin') {
                  infobox.setLocation(e.target.getLocation());
                  infobox.setOptions({ visible: true, title: e.target.Title, description: e.target.Description });
              }
            }
            //  Event Show Bing Maps Tooltip
            function displayInfoboxClose(e) {
              if (e.targetType == 'pushpin') {
                    infobox.setLocation(e.target.getLocation());
                  infobox.setOptions({ visible: false});
              }
            }

         }

        if( $("#map-canvas").length ) {
          GetMap();
        }


}(jQuery));
