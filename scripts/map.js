require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Directions",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery"

  ], function(esriConfig, Map, MapView, BasemapToggle, Directions, BasemapGallery) {

    esriConfig.apiKey = "AAPKc0b8ba2631154c479397b7b54ef30a317KkDtiXgQNidqHbd_SP-sm7BdeGE5jQ-mGWnCAgLB7dFTkGEXcLLe6SZHFRpr14m";

    const map = new Map({
      basemap: "arcgis-topographic"
    });

    const view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-74.11701,4.71049],
      zoom: 15
    });

    const basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "arcgis-imagery"
   });

    view.ui.add(basemapToggle,"bottom-left");




    

    view.ui.add(basemapGallery, "top-right"); // Add to the view


  });

  