var button = d3.select("#submit");
var url = "http://127.0.0.1:5000/api/v1.0/classifier/"
var form = d3.select("#form");
// console.log(url);

button.on("click", function() {
    const title = d3.select("#title").property("value");
    
     // Prevent the page from refreshing
    d3.event.preventDefault();
    d3.json(url + title, function(err, data){
         console.log(err)
         console.log(data);
         d3.select("#pid").text(data.category)
    })
});