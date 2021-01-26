

// Drop Down 
function populateDropdown(){
    var countries =["US","CA","JP","KR"]
    var select = d3.select("#selDataset");
    
        countries.forEach((id) =>{
            select.append("option")
            .text(id)
            .property("value", id)
        });
  
      }

populateDropdown();

// Calling US Bubble Chart Function


// Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlot);

// Defining updatePLot
function optionChanged() {
    // Prevent the page from refreshing
    //d3.event.preventDefault();
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset").node().value;
        console.log(dropdownMenu);

        if (dropdownMenu == "US") {
            console.log("I AM HERE");
            displayUS();

        }

    // Call build plot function on dropdown menu
  
  }

  