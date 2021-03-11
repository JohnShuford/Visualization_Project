var button = d3.select("#submit");
var url = "http://127.0.0.1:5000/classifier?title="
var form = d3.select("#form");


button.on("click", function() {
    var title = d3.select("#title");
    var titleValue = title.property("value");
    
    var category = d3.request(url + titleValue)
        .mimeType("application/json")
        .response(function(xhr) { return JSON.parse(xhr.responseText); });
    
    console.log(category);
});