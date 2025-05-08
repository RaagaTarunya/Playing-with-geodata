/*----------------------------------------------------------------
  Name:        viewer.js
  Date:        November 2019
  Description: Base code for the - Web Programming - exercise
               (data viewer page)
  Version:     2.1
----------------------------------------------------------------*/
 
var navMap;
 
/*-- Initialization function --*/
function init() {
  //define map object & link to placeholder div:
  navMap = new ol.Map({target: "map_container"});
  // define layer as tiled map:
  osmLayer = new ol.layer.Tile({
    // load OSM (a connector predefined in the API) as source:
    source: new ol.source.OSM()
  });
  // add layer to map:
  navMap.addLayer(osmLayer);
  // create a map view:
  navMap.setView(
    //center coords and zoom level:
    new ol.View({
      center: ol.proj.transform([5.53, 52.13], 'EPSG:4326', 'EPSG:3857'),
      zoom: 7
    })
  );
 
  navMap.addControl(new ol.control.Zoom());
  navMap.addControl(new ol.control.MousePosition({
    projection: 'EPSG:4326',  
    coordinateFormat: ol.coordinate.createStringXY(4)
  })
);}
/*---*/