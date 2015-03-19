	$(document).ready(function(){
  
  setTimeout(function(){
    
    $("#name").removeClass("larger");

    $("#name span").each(function(){
      $(this).css("-webkit-transition-delay",$(this).data("delay")+"ms").css("transition-delay",$(this).data("delay")+"ms");
      $(this).addClass("visible");
    });
    
	}, 1000);    
  
});

	function openSchool(){
	$('.school-container li .school-block').click(function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');

			var setLeftPos 	= $('.school-container li .school-block.active').position().left,
				setRightPos = -setLeftPos + $('.school-container').width() - $(this).width(),
				schoolBlock = $(this);
				state		= $(this).children('.state');

			$(schoolBlock).css('left', setLeftPos);
			$(schoolBlock).css('right', setRightPos);

				$(schoolBlock).animate({
					'bottom': '0',
					'top': '0',
					'min-width': ''
				},{duration: 250, queue: false});
				$(schoolBlock).animate({
					'left': '0',
					'right': '0'
				},{duration:250, queue: false});
				$(state).animate({
					width: '40%'
				},{duration:250, queue: false});

				setTimeout(function(){
					$('.schools').css('width','59%');
					$('.school-list').addClass('fade');
					$('.closeSchool').addClass('fade');
				},300);


			$('.closeSchool').click(function(){
				$('.school-container li .school-block.active').dequeue().animate({
					'bottom': '100%',
					'top': '0',
					'min-width': '200px',
					'left': setLeftPos,
					'right': setRightPos
				},250, function(){
					$('.school-container li .school-block.active').removeClass('active');
					var setLeftPos = 0;
					var setRightPos = 0;

				});
				$(state).animate({
					width: '96%'
				},{duration:250, queue: false});

				$('.schools').css('width','1%');
				$('.school-list').removeClass('fade');
				$('.closeSchool').removeClass('fade');
				$('.map').removeClass('slide');
			});
		}else {
			console.log('doesnt');
		}
	});

	$('.address').click(function(){
		$('.map').addClass('slide');
		$('.slide').click(function(){
			$('.map').removeClass('slide');
		});
	});

}


function functionInit() {
	openSchool();
}

$(function() {
	functionInit();
});













jQuery(function() {
  $ = jQuery;
  $(window).load( function() { $(".external-link").unbind("click"); }); 

  //pricing
    $(document).scroll(function(){
        document_top = $(document).scrollTop()-1000;
        event_wapper_top = $("#level-two").position().top-1110;
        if(document_top<event_wapper_top){
            degree = (360/event_wapper_top)*(document_top);
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#level-two .content span").css({
                        '-webkit-transform': 'rotate(' + degree + 'deg)',
                        '-moz-transform': 'rotate(' + degree + 'deg)',
                        '-ms-transform': 'rotate(' + degree + 'deg)',
                        '-o-transform': 'rotate(' + degree + 'deg)',
                        'transform': 'rotate(' + degree + 'deg)',
            });
            $("#level-two .content").css({
                        'opacity':event_animate_alpha
            });
        }else{
            $("#level-two .content span").css({
                        '-webkit-transform': 'rotate(' + 360 + 'deg)',
                        '-moz-transform': 'rotate(' + 360 + 'deg)',
                        '-ms-transform': 'rotate(' + 360 + 'deg)',
                        '-o-transform': 'rotate(' + 360 + 'deg)',
                        'transform': 'rotate(' + 360 + 'deg)',
            });
            $("#level-two .content").css({
                        'opacity':1
            });
        }
    });
    //blog
    $(document).scroll(function(){
        document_top = $(document).scrollTop()-2000;
        event_wapper_top = $("#blog").position().top-2110;
        if(document_top<event_wapper_top){
            event_animate_num = event_wapper_top - document_top;
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#blog .image").css({'left': -event_animate_num,'opacity':event_animate_alpha});
            $("#blog article").css({'left':event_animate_num,'opacity':event_animate_alpha});
        }else{
            $("#blog .image").css({'left': 0,'opacity':1});
            $("#blog article").css({'left':0,'opacity':1});
        }
    });
    //contact
    $(document).scroll(function(){
        document_top = $(document).scrollTop()-3000;
        event_wapper_top = $("#contact").position().top-3110;
        if(document_top<event_wapper_top){
            event_animate_alpha = (1/event_wapper_top)*(document_top);
            $("#contact p, #map").css({'opacity':event_animate_alpha});
        }else{
            $("#contact p, #map").css({'opacity':1});
        }
    });
});
//google map
function initialize(){
    //define map
    var map;
    //lat lng
    myLatlng = new google.maps.LatLng(63.4304895, 10.3950420);
    //define style
    var styles = [
        {
            //set all color
            featureType: "all",
            stylers: [{ hue: "#35a9d8" }]
        },
        {
            //hide business
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
        }
    ];
    //map options
    var mapOptions = {
        zoom: 14,
        center: myLatlng ,
        mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']} ,
        panControl: true , //hide panControl
        zoomControl: true , //show zoomControl
        mapTypeControl: false , //hide mapTypeControl
        scaleControl: false , //hide scaleControl
        streetViewControl: true , //hide streetViewControl
        overviewMapControl: false , //hide overviewMapControl
        scrollwheel: false, //disable overviewMapControl
    }
    //adding attribute value
    map = new google.maps.Map(document.getElementById('contact-map'), mapOptions);
    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    //add marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Welcome to Trondheim'
    });
}
google.maps.event.addDomListener(window, 'load', initialize); 
google.maps.event.addDomListener(window, 'resize', initialize); 







