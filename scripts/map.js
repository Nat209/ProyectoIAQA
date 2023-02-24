require([
  "esri/Map", 
  "esri/views/MapView", 
  "esri/widgets/Directions", 
  "esri/layers/RouteLayer",
  "esri/Graphic",
  "esri/geometry/Point",
  "esri/PopupTemplate",
], function(
  Map,
  MapView,
  Directions,
  RouteLayer,
  PopupTemplate,
  Graphic, 
  Point
) {

  // An authorization string used to access the basemap, geocoding and routing services
  const apiKey = "AAPKc0b8ba2631154c479397b7b54ef30a317KkDtiXgQNidqHbd_SP-sm7BdeGE5jQ-mGWnCAgLB7dFTkGEXcLLe6SZHFRpr14m";;

  // create a new RouteLayer, required for Directions widget
  const routeLayer = new RouteLayer();

  // new RouteLayer must be added to the map
  const map = new Map({
    basemap: "topo-vector",
    layers: [routeLayer]
  });

  const view = new MapView({
    zoom: 14,
    center: [-74.11732356881502,4.7117303726211235],
    container: "viewDiv",
    map: map
  });

  // new RouteLayer must be added to Directions widget
  let directionsWidget = new Directions({
    layer: routeLayer,
    apiKey,
    view
  });

  // Add the Directions widget to the top right corner of the view
  view.ui.add(directionsWidget, {
    position: "top-right"
  });

});