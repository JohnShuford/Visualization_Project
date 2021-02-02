// Create map
// population = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var format = function(d, i) {
//     // for (var i = 0; i < population.length; i++){
//     //     var conPop = population[i]
//     //     console.log(conPop)

//     //     d = d + conPop[i]
//     // }
//     var usa = population[1]
//     console.log(usa)
//     var pop = population[1]

//     if (d === 0) {
//         d === d + pop
//     }

//     console.log(d)
    
//     return d;
// }

// var iterator = population.values();

// for (let letter of iterator) {
//     console.log(letter);
// }

// var format = function(d) {
//     var iterator = population.values();

//     for (let letter of iterator) {
//     var let = letter
//     console.log(let);
//     }

//     d = d[let];

//     return d;
// }

var format = function(d) {
    d = d / 1000000;
    return d3.format(',.02f')(d) + ' M';
}

var map = d3.choropleth()
    .geofile('JSONs/world/countries.json')
    //.colors(['#6fc7f1','#87e36d','#eea8ec', '#ac4cdd', '#b0f7d7', '#e9f001', '#ff9100', '#fc000e', '#ff737e', '#1f00ff'])
    //.colors(d3.schemeYlGnBu[9])
    .colors(d3.schemePiYG[9])
    //.column(' ')
    .column('Population')
    //.colors(d3.schemePaired)
    //.domain([0, 9])
    .format(format)
    .legend(true)
    .unitId('iso3');

d3.csv('./data/Custom/custom_domain.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});