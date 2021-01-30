// var map = d3.geomap()
//     .geofile('topojson/world/countries.json')
//     .draw(d3.select('#map'));

var map = d3.choropleth()
    .geofile('topojson/world/countries.json')
    //.colors(['#33ffcc','#66ccff'])
    //.colors(['#FBDFE6','#EC6988','#D61A46', '#7B0F28', '#340913'])
    .colors(['#ff8080','#79BEA8','#ffff80','#ffcc99'])
    .column('1800')
    .domain([0, 9])
    .legend(false)
    .unitId('iso3');

d3.csv('custom_domain.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});