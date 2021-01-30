// Function to populate Drop Down Menu, and initialize the page with data from Canada
function populateDropdown() {
    var countries =["Canada","France","Germany","Great Britain","India", "Japan", "Korea", "Mexico","Russia", "U.S.A"];
    var select = d3.select("#selDataset");
        countries.forEach((id) =>{
            select.append("option")
            .text(id)
            .property("value", id)
        });
        buildPlot("CANADA");  // Page will initialize with Canada data
    }

populateDropdown();

// Function to change data based on dropdown selection
function optionChanged() {

  // Clears the data of the current page   
  d3.select("#vis").html("");
  
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset").node().value;
      console.log(dropdownMenu);

  buildPlot(dropdownMenu);
  
  }

// Function to build plot
function buildPlot(country){
  //Load in CSV data
  Plotly.d3.csv("../../CSVs/All_cnt_ctg.csv", function(err, rows){
    console.log(rows);
    console.log(country);
    //Filter data based on country
    var countryFilter = rows.filter(row => row.Country == country.toUpperCase())
    console.log(countryFilter);
    
    // Most popular channel
    // Step 1: Sort by no_of_vids in desc order
    var sortedCountry = countryFilter.sort(function (a, b) {return b.no_of_vids - a.no_of_vids})
    console.log(sortedCountry);
    // Step 2: Slice top 10 values to get array of top 10 values
    var countryTen = sortedCountry.slice(0,10);
    console.log(countryTen);
    // Step 3: Get channel titles names of top 10 values
    var channelTitles = countryTen.map(d => d.channel_title);
    console.log(channelTitles);

    // Most viewed videos: view count
    var sortedCountryViews = countryFilter.sort(function (a, b) {return b.views - a.views}).slice(0,10).map(d => d.views)
    console.log(sortedCountryViews);
    // Most viewed videos: video title
    var sortedCountryTitle = countryFilter.sort(function (a, b) {return b.views - a.views}).slice(0,10).map(d => d.title)
    console.log(sortedCountryTitle);
    
    // Most liked videos: like count
    var sortedCountryLiked = countryFilter.sort(function (a, b) {return b.likes - a.likes}).slice(0,10).map(d => d.likes)
    console.log(sortedCountryLiked);
    // Most liked videos: video title
    var sortedLikedTitle = countryFilter.sort(function (a, b) {return b.likes - a.likes}).slice(0,10).map(d => d.title)
    console.log(sortedLikedTitle);

    // Most commented on videos: comment count
    var sortedComment = countryFilter.sort(function (a, b) {return b.comment_count - a.comment_count}).slice(0,10).map(d => d.comment_count)
    // Most commented on videos: video title
    var sortedCommentTitle = countryFilter.sort(function (a, b) {return b.comment_count - a.comment_count}).slice(0,10).map(d => d.title)
    
    // Most disliked videos: dislike count
    var sortedDislikes = countryFilter.sort(function (a, b) {return b.dislikes - a.dislikes}).slice(0,10).map(d => d.dislikes)
    // Most disliked videos: video titles
    var sortedDislikesTitle = countryFilter.sort(function (a, b) {return b.dislikes - a.dislikes}).slice(0,10).map(d => d.title)

    // Top Channel Titles Card
    var channelDiv = d3.select("#channel").html('');

    for (var i = 0; i < 5; i++){
      channelDiv.append("li").text(channelTitles[i]);
    };

    // Create number format variable to format number values for displaying on page
    var numberFormat = d3.format(",");
    
    // Top Viewed Videos Card
    var channelViews = d3.select("#views").html('');

    for (var i = 0; i < 5; i++){
      channelViews.append("li").html(`<b>${numberFormat(sortedCountryViews[i])}: </b>${sortedCountryTitle[i]}`);
    };

    // Top Liked Videos Card
    var channelLikes = d3.select("#likes").html('');

    for (var i = 0; i < 5; i++){
      channelLikes.append("li").html(`<b>${numberFormat(sortedCountryLiked[i])}: </b> ${sortedLikedTitle[i]}`);
    };

    // Top Commented Videos Card
    var channelComments = d3.select("#comments").html('');

    for (var i = 0; i < 5; i++){
      channelComments.append("li").html(`<b>${numberFormat(sortedComment[i])}: </b>${sortedCommentTitle[i]}`);
    };

    // Top Disliked Videos Card
    var channelDislikes = d3.select("#dislikes").html('');

    for (var i = 0; i < 5; i++){
      channelDislikes.append("li").html(`<b>${numberFormat(sortedDislikes[i])}: </b>${sortedDislikesTitle[i]}`);
    };
    
  });
}
    
 