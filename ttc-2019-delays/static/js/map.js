

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


var urlDeley = "/delay";

var urlMap ="/map";
var Kennedy=[];
var Warden=[];
var VictoriaPark=[];
var MainStreet=[];
var Woodbine=[];
var Coxwell=[];
var Greenwood=[];
var Donlands=[];
var Pape=[];
var Chester=[];
var Broadview=[];
var CastleFrank=[];
var Sherboune=[];
var BloorYonge=[];
var Bay=[];
var StGeorge=[];
var Spadina=[];
var Bathurst=[];
var Christie=[];
var Ossington=[];
var Dufferin=[];
var Lansdowne=[];
var DundasWest=[];
var Keele=[];
var HighPark=[];
var Runnymed=[];
var Jane=[];
var OldMill=[];
var RoyalYork=[];
var Islington=[];
var Kipling=[];

var LawrenceEast=[];
var Ellesmere=[];
var Midland=[];
var Scarborough=[];
var McCowan=[];

d3.csv (urlDeley, function(data){
  console.log(data);
  // console.log(data.station)
  // for (i =0; i<data.length; i++){
  //   if (data[i].station = "Kennedy"){
  //     Kennedy.push(data[i].min_delay)
  //   }
  //   else if (data[i]="Warden"){
  //     Warden.push(data[i].min_delay)
  //   }
  //   else if (data[i]="Warden"){
  //     VictoriaPark.push(data[i].min_delay)
  //   }
  //   else {
      
  //   }
  






  });

  //circle on the stop
  var circle = L.circle([43.6711, -79.3858], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(mymap);

// polygon to connect stops
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);
polygon.bindPopup("I am a polygon.");