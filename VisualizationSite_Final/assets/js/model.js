var button = d3.select("#title");

button.on("click", function() {
    d3.request(url)
        .mimeType("application/json")
        .response(function(xhr) { return JSON.parse(xhr.responseText); });
});