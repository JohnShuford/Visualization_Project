// Format population values for tool tip
var format = function(d) {
    d = d / 1000000;
    return d3.format(',.02f')(d) + ' M';
}
// Create map
var map = d3.choropleth()
    .geofile('JSONs/world/countries.json')
    .colors(d3.schemePiYG[9])
    .column('Population')
    .format(format)
    .legend(true)
    .unitId('iso3');

d3.csv('./data/Custom/custom_domain.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});