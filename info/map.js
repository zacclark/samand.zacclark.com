(function () {
    var initialize = function () {
        var farmLoc = new google.maps.LatLng(40.169552, -105.236717);
        var mapOptions = {
            center: farmLoc,
            zoom: 14,
            disableDefaultUI: true,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var farmMarker = new google.maps.Marker({ position: farmLoc, title: "Farm" });
        farmMarker.setMap(map);
    };
    google.maps.event.addDomListener(window, 'load', initialize);
})();