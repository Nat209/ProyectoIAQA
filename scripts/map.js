require(["esri/Map", "esri/views/MapView", "esri/widgets/Directions", "esri/layers/RouteLayer"], function(
  Map,
  MapView,
  Directions,
  RouteLayer
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
    center: [-118.24, 34.05],
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