function markerSize(total) {
  return total / 6000;
}

// Country data
var countries = [
  {
    name: "United Kingdom",
    coordinates: [54, -2],
    total: 2122672331
   },
  
   {
    name: "Germany",
    coordinates: [51, 9],
    total: 2545047594
   },
  
   {
    name: "Canada",
    coordinates: [55,-110], 
    total: 2707881149
   },
  
   { 
    name: "India",
    coordinates: [20,77], 
    total: 660816013
   },
  
   { 
    name: "U.S.A",
    coordinates: [38,-97],
    total: 1370730670 
   },
  
   {  
    name: "South Korea",  
    coordinates: [37, 127.5],  
    total: 1255061024 
   },
  
   {  
    name: "France",  
    coordinates: [46, 2], 
    total: 1962838695  
   },
  
   {  
    name: "Russia", 
    coordinates: [60,100],  
    total: 1155558365 
   },
  
   { 
    name: "Mexico", 
    coordinates: [23,-102],
    total: 1529353706 
   },
  
   {  
    name: "Japan",  
    coordinates: [36,138],  
    total: 863400056 
   }
];

// Define arrays to hold created city and state markers
var countryMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < countries.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  countryMarkers.push(
    L.circle(countries[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: chooseColor(countries[i].name),
      radius: markerSize(countries[i].total)
    }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Watched YouTube: " + countries[i].total + "</h3>")
  );

}

// Function that will determine the color of a neighborhood based on the borough it belongs to
function chooseColor(name) {
  switch (name) {

  case "Canada":
    return "pink";

  case "Germany":
    return "purple";

  case "France":
    return "darkorange";

  case "United Kingdom":
    return "grey";

  case "India":
    return "maroon";

  case "South Korea":
    return "hotpink";
      
  case "Mexico":
    return "lime";

  case "Russia":
    return "yellow";

  case "U.S.A":
    return "blue";

  case "Japan":
    return "red";

  default:
    return "black";
  }
}


  var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "outdoors-v11",
    accessToken: API_KEY
  })
  
  
  var satellite = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.satellite",
      accessToken: API_KEY
  });

  // Create two separate layer groups: one for cities and one for states
  var countries = L.layerGroup(countryMarkers);

// Create a baseMaps object
var baseMaps = {
  "Satellite Map": satellite,
  "Outdoors Map": outdoors
};

// Create an overlay object
var overlayMaps = {
  "Total Watched Videos": countries,

};

// Create a map object
var myMap = L.map("map", {
  center: [32, 10],
  zoom: 3,
  layers: [satellite, countries]
});


// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);


// countries.forEach(function(d){
//   var marker = L.marker(d.coordinates,{
//     title: d.name,
//     draggable: true,
//   }).addTo(myMap);

// // Binding a pop-up to our marker
// marker.bindPopup(`<b>${d.name}</b><hr> Total Watched YouTube: ${d.total}`);
// })

