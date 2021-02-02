

// Drop Down Menu **Function**
function populateDropdown() {
    var countries =["Canada","France","Germany","Great Britain","India", "Japan", "South Korea", "Mexico","Russia", "U.S.A"];
    var select = d3.select("#selDataset");
        countries.forEach((id) =>{
            select.append("option")
            .text(id)
            .property("value", id)
        });
        buildPlot("CANADA");  // intial page will load Canada, this was eliminated, instead init function was created.

        
      }

populateDropdown();

// Menu Option Change **Function**
function optionChanged() {

  // Clears the data of the current page   
  d3.select("#vis").html("");
  
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset").node().value;
      console.log(dropdownMenu);

  buildPlot(dropdownMenu);

}


function buildPlot(country){
  
  Plotly.d3.csv("data/plotly_data/All_cnt_ctg.csv", function(err, rows){
    console.log(rows);
    console.log(country);
    //Filter to only Canada
    var countryFilter = rows.filter(row => row.Country == country.toUpperCase())
    console.log(countryFilter);

    /////////////////////////////
    //Most popular channels
    ////////////////////////////

    //Step 1: Sort by no_of_vids in desc order
    var sortedCountry = countryFilter.sort(function (a, b) {return b.no_of_vids - a.no_of_vids})
    console.log(sortedCountry);
    
    //Step 2: slice top 10 values to get channel titles with most videos
    var countryTen = sortedCountry.slice(0,10);
    console.log(countryTen);

    //Step 3: get channel titles of top 10 channels
    var channelTitles = countryTen.map(d => d.channel_title);
    console.log(channelTitles);

    /////////////////////////
    //Most views Channels
    var sortedCountryViews = countryFilter.sort(function (a, b) {return b.views - a.views}).slice(0,10).map(d => d.views)
    console.log(sortedCountryViews);

    var sortedCountryTitle = countryFilter.sort(function (a, b) {return b.views - a.views}).slice(0,10).map(d => d.title)
    console.log(sortedCountryTitle);

    ///////////////////////
    //Most Liked Channels
    var sortedCountryLiked = countryFilter.sort(function (a, b) {return b.likes - a.likes}).slice(0,10).map(d => d.likes)
    console.log(sortedCountryLiked);

    var sortedLikedTitle = countryFilter.sort(function (a, b) {return b.likes - a.likes}).slice(0,10).map(d => d.title)
    console.log(sortedLikedTitle);

    ///////////////////////////
    //Most Commented Channels
    var sortedComment = countryFilter.sort(function (a, b) {return b.comment_count - a.comment_count}).slice(0,10).map(d => d.comment_count)

    var sortedCommentTitle = countryFilter.sort(function (a, b) {return b.comment_count - a.comment_count}).slice(0,10).map(d => d.title)
    
    ///////////////////////////
    //Most Disliked Channels
    var sortedDislikes = countryFilter.sort(function (a, b) {return b.dislikes - a.dislikes}).slice(0,10).map(d => d.dislikes)

    var sortedDislikesTitle = countryFilter.sort(function (a, b) {return b.dislikes - a.dislikes}).slice(0,10).map(d => d.title)

    //////////////////////////
    //Channel Div Channels
    var channelDiv = d3.select("#channel").html('');

    for (var i = 0; i < 5; i++){
      channelDiv.append("li").text(channelTitles[i]);
    };


    //////////////////////////
    //Number format variable 
    //////////////////////////
    var numberFormat = d3.format(",");
    //Country Views
    var channelViews = d3.select("#views").html('');

    for (var i = 0; i < 5; i++){
      channelViews.append("li").html(`<b>${numberFormat(sortedCountryViews[i])}: </b>${sortedCountryTitle[i]}`);
    };

    //Most Liked Channels
    var channelLikes = d3.select("#likes").html('');

    for (var i = 0; i < 5; i++){
      channelLikes.append("li").html(`<b>${numberFormat(sortedCountryLiked[i])}: </b> ${sortedLikedTitle[i]}`);
    };

    //Most comment Channels
    var channelComments = d3.select("#comments").html('');

    for (var i = 0; i < 5; i++){
      channelComments.append("li").html(`<b>${numberFormat(sortedComment[i])}: </b>${sortedCommentTitle[i]}`);
    };

    //Most Disliked Channels
    var channelDislikes = d3.select("#dislikes").html('');

    for (var i = 0; i < 5; i++){
      channelDislikes.append("li").html(`<b>${numberFormat(sortedDislikes[i])}: </b>${sortedDislikesTitle[i]}`);
    };


    
  });
}
    
