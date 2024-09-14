if (document.querySelector('.about-section .about-img'))
/*Moving background */
{
    var background = document.querySelector('.about-section .about-img ');
    var listner = document.querySelector('.about-section');
    var windowWidth = window.innerWidth / 5;
    var windowHeight = window.innerHeight / 5;

    listner.addEventListener('mousemove', function(event) {
        var mouseX = event.clientX / windowWidth;
        var mouseY = event.clientY / windowHeight;

        background.style.transform = "translate3d(-" + mouseX + "%, -" + mouseY + "% , 0)";
    });
}



// //button
// $(document).ready(function(){
//   $(".link-blog .links").each(function(){
//   $(this).prepend("<span></span>");
//   $(this).find('span').eq(0).addClass('span_hover');
//   });
//   $(".hover_left").hover(function(){
//   $(this).find('span').eq(0).animate({
//    width:'100%'
//   },500);

//   },function(){
//   $(this).find('span').eq(0).animate({
//    width:'0'
//   },500);
//   });
//   });


//slider header
$('.proo').owlCarousel({
    loop: false,
    margin: 30,
    rtl: true,
    items: 0,
    nav: true,
    dots: true,
    center: false,
    responsiveClass: true,
    navText: ['<span class="fa-stack fa-lg  ml-2"><i class= "fa fa-square fa-stack-2x" ></i><i class="fa fa-chevron-right fa-stack-1x fa-inverse"></i></span>',
        '<span class="fa-stack fa-lg ml-2"><i class= "fa fa-square fa-stack-2x" ></i><i class="fa fa-chevron-left fa-stack-1x fa-inverse"></i></span>'
    ],
    responsive: {
        0: { items: 1 },
        480: { items: 2 },
        768: { items: 2 },
        991: { items: 3 },
        1200: { items: 3 }
    }

});

$('.header-slider').owlCarousel({
    loop: false,
    margin: 0,
    rtl: true,
    items: 0,
    nav: true,
    dots: true,
    center: false,
    responsiveClass: true,
    navText: ["<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
        0: { items: 1 },
        480: { items: 1 },
        991: { items: 1 },
        1200: { items: 1 }
    }
});




//partners

$('.partners').owlCarousel({
    loop: false,
    margin: 4,
    rtl: true,
    items: 0,
    nav: true,
    dots: true,
    center: false,
    responsiveClass: true,
    navText: ["<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
        0: { items: 2 },
        480: { items: 3 },
        768: { items: 4 },
        991: { items: 5 },
        1024: { items: 5 },
        1200: { items: 6 }
    }
});

//team

$('.teams').owlCarousel({
    loop: false,
    margin: 30,
    rtl: true,
    items: 0,
    nav: false,
    dots: true,
    center: false,
    responsiveClass: true,
    navText: ["<i class='fa fa-chevron-left '></i>",
        "<i class='fa fa-chevron-right '></i>"
    ],
    responsive: {
        0: { items: 1, nav: false },
        480: { items: 1 },
        768: { items: 2 },
        991: { items: 3 },
        1200: { items: 3 }
    }
});
//service-content
$('.service-content').owlCarousel({
    loop: false,
    margin: 30,
    rtl: true,
    items: 0,
    nav: false,
    dots: true,
    center: false,
    responsiveClass: true,
    navText: ["<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
        0: { items: 1 },
        480: { items: 1 },
        768: { items: 2 },
        991: { items: 4 },
        1200: { items: 4 }
    }

});

// facts counter
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

//scroll
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('.scrolltop').addClass("show");
    } else {
        $('.scrolltop').removeClass("show");
    }
})
$('.scrolltop').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 400)
})

function initialize(_this) {

    var stylesArray = {
        //style 1
        'style-1': [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]


    };

    var styles, map, marker, infowindow,
        lat = $(_this).attr("data-lat"),
        lng = $(_this).attr("data-lng"),
        contentString = $(_this).attr("data-string"),
        image = $(_this).attr("data-marker"),
        styles_attr = $(_this).attr("data-style"),
        zoomLevel = parseInt($(_this).attr("data-zoom"), 10),
        myLatlng = new google.maps.LatLng(lat, lng);


    // style_1
    if (styles_attr == 'style-1') {
        styles = stylesArray[styles_attr];
    }
    // custom
    if (typeof hawa_style_map != 'undefined' && styles_attr == 'custom') {
        styles = hawa_style_map;
    }
    // or default style

    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

    var mapOptions = {
        zoom: zoomLevel,
        disableDefaultUI: true,
        center: myLatlng,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    map = new google.maps.Map(_this, mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}



/*Loadiing page*/

$(window).on('load', function() {
    $('.loading-overlay .sk-chase').fadeOut(1000,
        function() {
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(500,

                function() {

                    $(this).remove();

                });
        });
    if ($('.wheel-map').length) {
        $('.wheel-map').each(function() {
            initialize(this);
        });
    }
});