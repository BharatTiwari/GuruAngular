var commonFile = {
    isScrolledIntoView: (function (elem) {        
        function functionDef(elem) {            
            var $elem = $(elem);
            var $window = $(window);
            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
        return functionDef
    })(),
    calldMainJs: function () {        
        appenddMainJs();
        return appenddMainJs
    },
    myMap: function () {
        bindMap();
        return bindMap
    },
    GetRoute: function () {
        debugger
        GetRoutes();
        return GetRoutes;
    }
}
function appenddMainJs() {    
    var mainJs = 0; 
    var script = $('script');
    loop: for (var i = 0; i < script.length; i++) {
        if (script[i].src.indexOf('js/main.js') > -1) {            
            $('script').eq(i).remove();
            break loop;
        }
    }    
    setTimeout(function () {        
        $('body').append('<script src="http://localhost:4200/assets/js/main.js"></script>');
    }, 100)
}

function bindMap() {
    var myCenter = new google.maps.LatLng(28.4095, 77.5148);
    var mapCanvas = document.getElementById("pac-input");
    var mapOptions = { center: myCenter, zoom: 20 };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({ position: myCenter });
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
        content: "Franciscan Solutions!"
    });
    infowindow.open(map, marker);
}

function GetRoutes() {
    debugger
    //
    var source, destination;
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService(); debugger
    google.maps.event.addDomListener(window, 'load', function () {
        debugger
        new google.maps.places.SearchBox(document.getElementById('txtSource'));
        new google.maps.places.SearchBox(document.getElementById('txtDestination'));
        directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });
    

    //
    var mumbai = new google.maps.LatLng(18.9750, 72.8258);
    var mapOptions = {
        zoom: 7,
        center: mumbai
    };
    map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
    debugger
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('dvPanel'));

    //*********DIRECTIONS AND ROUTE**********************//
    source = document.getElementById("txtSource").value;
    destination = document.getElementById("txtDestination").value;

    var request = {
        origin: source,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });

    //*********DISTANCE AND DURATION**********************//
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [source],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function (response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
            var distance = response.rows[0].elements[0].distance.text;
            var duration = response.rows[0].elements[0].duration.text;
            var dvDistance = document.getElementById("dvDistance");
            dvDistance.innerHTML = "";
            dvDistance.innerHTML += "Distance: " + distance + "<br />";
            dvDistance.innerHTML += "Duration:" + duration;

        } else {
            alert("Unable to find the distance via road.");
        }
    });

    });
}