// Create map
var format = function(d) {
    d = "";
    return d;
}

var map = d3.choropleth()
    .geofile('JSONs/world/countries.json')
    .colors(['#6fc7f1','#87e36d','#eea8ec', '#ac4cdd', '#b0f7d7', '#e9f001', '#ff9100', '#fc000e', '#ff737e', '#1f00ff'])
    .column(' ')
    .domain([0, 9])
    .format(format)
    .legend(false)
    .unitId('iso3');

d3.csv('./data/Custom/custom_domain.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});