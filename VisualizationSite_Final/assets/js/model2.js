var button = d3.select("#submit");
var url = "http://127.0.0.1:5000/api/v1.0/classifier/"
var form = d3.select("#form");
console.log(url);

button.on("click", function() {
    var title = d3.select("#title");
    var titleValue = title.property("value");

    console.log(titleValue);

    d3.json(url + titleValue, function(data){
        d3.select("#pid").text(data.category)
         console.log(data);
         console.log("We are here");
    })
    
//     d3.json("https://api.npoint.io/5b22a0474c99d3049d2e", function(data) {
//     console.log(data)
// })

    // var category = d3.request(url + titleValue)
    //     .mimeType("application/json")
    //     .response(function(xhr) {parsed = JSON.parse(xhr.responseText); 
    //     console.log(parsed);});
    
    console.log(category);
});