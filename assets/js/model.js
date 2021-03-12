var button = d3.select("#submit");
var url = "http://127.0.0.1:5000/api/v1.0/classifier/"
var form = d3.select("#form");


button.on("click", function() {
    var title = d3.select("#title");
    var titleValue = title.property("value");

    d3.json(url + titleValue, function(error, data){
        console.log(error);
        console.log(data);
    })
    
    // var category = d3.request(url + titleValue)
    //     .mimeType("application/json")
    //     .response(function(xhr) {parsed = JSON.parse(xhr.responseText); 
    //     console.log(parsed);});
    
    console.log(category);
});