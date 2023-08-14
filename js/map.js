function myMap() {
var mapProp = {
    center:new google.maps.LatLng(19.036623581677404, 72.94806605485125),
    zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}