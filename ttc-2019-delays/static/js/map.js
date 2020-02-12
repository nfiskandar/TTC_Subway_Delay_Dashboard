

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
d3.json(urlMap).then(function(data){
  console.log(data);	


// //line1
// var line1coordinates=[];
// for (var  a=0; a<40;  a++){
//   var circle1 = L.circle( [parseFloat(data[a].latitude), parseFloat(data[a].longitude)], {
//         color: 'red',
//         fillColor: 'yellow',
//         fillOpacity: 0.7,
//         radius: 50
//       }).addTo(mymap);
//   //popup
//   circle1.bindPopup("<h3>" + data[a].station +
//   "</h3><hr><p>Total Delay time:" + data[a].num_delays + 
//   "</p><hr><p> Avg Delay time:" + data[a].avg_delay_time + "</p>"); 
//   // polyline to connect stops  
//   var latlng1 =[ [parseFloat(data[a].latitude), parseFloat(data[a].longitude)]];
//   line1coordinates.push(latlng1)  
//   console.log(data[a].station);
// };
// console.log(line1coordinates);

// //line connecting between station
// var polyline1 = L.polyline(line1coordinates, {
//   color: "yellow",
//   weight: 55,
//   stroke: true
// }).addTo(mymap);


//line 2
var line2coordinates =[];
for (var i=40; i <70; i++) {
  var circle2 = L.circle( [parseFloat(data[i].latitude), parseFloat(data[i].longitude)], {
        color: 'red',
        fillColor: 'green',
        fillOpacity: 0.5,
        radius: 50
      }).addTo(mymap);
  //popup
  circle2.bindPopup("<h3>" + data[i].station +
  "</h3><hr><p>Total Delay time:" + data[i].num_delays + 
  "</p><hr><p> Avg Delay time:" + data[i].avg_delay_time + "</p>"); 
  // polyline to connect stops  
  var latlng2 =[ [parseFloat(data[i].latitude), parseFloat(data[i].longitude)]];
  line2coordinates.push(latlng2)  
  console.log(data[i].station);
};
console.log(line2coordinates);
var polyline2 = L.polyline(line2coordinates, {
  color: "green",
  weight: 55,
  stroke: true
}).addTo(mymap);


//line3
var line3coordinates=[];
for (var j =70; j <77; j ++){
  var circle3 = L.circle( [parseFloat(data[j].latitude), parseFloat(data[j].longitude)], {
        color: 'red',
        fillColor: 'blue',
        fillOpacity: 0.7,
        radius: 50
      }).addTo(mymap);
  //popup
  circle3.bindPopup("<h3>" + data[j].station +
  "</h3><hr><p>Total Delay time:" + data[j].num_delays + 
  "</p><hr><p> Avg Delay time:" + data[j].avg_delay_time + "</p>"); 
  // polyline to connect stops  
  var latlng3 =[ [parseFloat(data[j].latitude), parseFloat(data[j].longitude)]];
  line3coordinates.push(latlng3)  
  console.log(data[j].station);
};

console.log(line3coordinates);
var polyline3 = L.polyline(line3coordinates, {
  color: "blue",
  weight: 55,
  stroke: true
}).addTo(mymap);

//line4
var line4coordinates=[];
for (var k =77; k<82;  k++){
  var circle4 = L.circle( [parseFloat(data[k].latitude), parseFloat(data[k].longitude)], {
        color: 'red',
        fillColor: 'purple',
        fillOpacity: 0.7,
        radius: 50
      }).addTo(mymap);
  //popup
  circle4.bindPopup("<h3>" + data[k].station +
  "</h3><hr><p>Total Delay time:" + data[k].num_delays + 
  "</p><hr><p> Avg Delay time:" + data[k].avg_delay_time + "</p>"); 
  // polyline to connect stops  
  var latlng4 =[ [parseFloat(data[k].latitude), parseFloat(data[k].longitude)]];
  line4coordinates.push(latlng4)  
  console.log(data[k].station);
};
console.log(line4coordinates);

var polyline4 = L.polyline(line4coordinates, {
  color: "purple",
  weight: 55,
  stroke: true
}).addTo(mymap);

});

  






 
