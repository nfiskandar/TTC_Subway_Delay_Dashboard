

var mymap = L.map("map", {
    center: [43.6711, -79.3858],
    zoom: 13
  });
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(mymap);


var urlMap ="/map";
var Map ="../data/station_in_line.csv";
d3.csv(Map).then(function(data){
  console.log(data);	
  
data.forEach( function(row){
   try{var coordinates = [parseFloat(row.latitude), parseFloat(row.longitude)];}
   catch(err){console.log(error
   )}
   finally{
    console.log(coordinates);
    console.log(row.station);
 
   //circle on the stop
  var circle = L.circle( coordinates, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
  }).addTo(mymap);
  //popup
  circle.bindPopup("<h3>" + row.station +
  "</h3><hr><p>" + row.num_delays + 
  "</p><hr><p> MAG:" + row.avg_delay_time + "</p>"); 
}   

});




});


  






 

// polygon to connect stops
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);
polygon.bindPopup("I am a polygon.");