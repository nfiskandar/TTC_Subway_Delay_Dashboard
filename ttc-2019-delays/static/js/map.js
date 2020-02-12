

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
// var urlMap ="../data/station_in_line.csv";

d3.json(urlMap).then(function(data){
  console.log(data);	


//line1
var line1coordinates=[];
for (var  a=0; a<38;  a++){
  var circle1 = L.circle( [parseFloat(data[a].latitude), parseFloat(data[a].longitude)], {
        color: 'yellow',
        fillColor: 'red',
        fillOpacity: 0.7,
        radius: 60
      }).addTo(mymap);
  //popup
  circle1.bindPopup("<h3>" + data[a].station +
  "</h3><hr><p>Total Delay Time: " + data[a].num_delays + 
  " minutes </p><hr><p> Avg Delay Time: " + data[a].avg_delay_time + " minutes </p>"); 
  // polyline to connect stops  
  var latlng1 = [parseFloat(data[a].latitude), parseFloat(data[a].longitude)];
  line1coordinates.push(latlng1)  
  // console.log(data[a].station);
};
// console.log(line1coordinates);

//line connecting between station
var polyline1 = L.polyline(line1coordinates, {
  color: "yellow",
  weight: 2,
  stroke: true
}).addTo(mymap);


//line 2
var line2coordinates =[];
for (var i=38; i <69; i++) {
  var circle2 = L.circle( [parseFloat(data[i].latitude), parseFloat(data[i].longitude)], {
        color: 'green',
        fillColor: 'red',
        fillOpacity: 0.5,
        radius: 60
      }).addTo(mymap);
  //popup
  circle2.bindPopup("<h3>" + data[i].station +
  "</h3><hr><p>Total Delay Time :" + data[i].num_delays + 
  " minutes</p><hr><p> Avg Delay Time: " + data[i].avg_delay_time + " minutes</p>"); 
  // polyline to connect stops  
  var latlng2 = [parseFloat(data[i].latitude), parseFloat(data[i].longitude)];
  line2coordinates.push(latlng2)  
  
};
console.log(line2coordinates);
var polyline2 = L.polyline(line2coordinates, {
  color: "green",
  weight: 2,
  stroke: true
}).addTo(mymap);


//line3
var line3coordinates=[];
for (var j =69; j <75; j ++){
  var circle3 = L.circle( [parseFloat(data[j].latitude), parseFloat(data[j].longitude)], {
        color: 'blue',
        fillColor: 'red',
        fillOpacity: 0.7,
        radius: 60
      }).addTo(mymap);
  //popup
  circle3.bindPopup("<h3>" + data[j].station +
  "</h3><hr><p>Total Delay Time: " + data[j].num_delays + 
  " minutes</p><hr><p> Avg Delay Time: " + data[j].avg_delay_time + " minutes</p>"); 
  // polyline to connect stops  
  var latlng3 = [parseFloat(data[j].latitude), parseFloat(data[j].longitude)];
  line3coordinates.push(latlng3)  
  
};


var polyline3 = L.polyline(line3coordinates, {
  color: "blue",
  weight: 2,
  stroke: true
}).addTo(mymap);

//line4
var line4coordinates=[];
for (var k =75; k<80;  k++){
  var circle4 = L.circle( [parseFloat(data[k].latitude), parseFloat(data[k].longitude)], {
        color: 'purple',
        fillColor: 'red',
        fillOpacity: 0.7,
        radius: 60
      }).addTo(mymap);
  //popup
  circle4.bindPopup("<h3>" + data[k].station +
  "</h3><hr><p>Total Delay Time: " + data[k].num_delays + 
  " minutes</p><hr><p> Avg Delay Time: " + data[k].avg_delay_time + " minutes</p>"); 
  // polyline to connect stops  
  var latlng4 = [parseFloat(data[k].latitude), parseFloat(data[k].longitude)];
  line4coordinates.push(latlng4)  
  
};
// console.log(line4coordinates);

var polyline4 = L.polyline(line4coordinates, {
  color: "purple",
  weight: 2,
  stroke: true
}).addTo(mymap);

// for (var x=0; x<data.length; x++) {
// var circle = L.circle( [parseFloat(data[x].latitude), parseFloat(data[x].longitude)], {
//   color: 'red',
//   fillColor: 'red',
//   fillOpacity: 0.7,
//   radius: 60
// }).addTo(mymap);
// //popup
// circle.bindPopup("<h3>" + data[x].station +
// "</h3><hr><p>Total Delay Time: " + data[x].num_delays + 
// " minutes</p><hr><p> Avg Delay Time: " + data[x].avg_delay_time + " minutes</p>"); 
// }



});

  






 
