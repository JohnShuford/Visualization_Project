
// Drop Down Menue
function populateDropdown() {
    var countries =["Canada","Denmark","France","Great Britain","India", "Japan", "Korea", "Mexico","Russia", "U.S.A"]
    var select = d3.select("#selDataset");
    
        countries.forEach((id) =>{
            select.append("option")
            .text(id)
            .property("value", id)
        });
  
      }

populateDropdown();


// Defining updatePLot
function optionChanged() {
    // Prevent the page from refreshing
    //d3.event.preventDefault();
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset").node().value;
        console.log(dropdownMenu);

        if (dropdownMenu == "Canada") {
            console.log("I AM HERE CA");
            displayCA();
        }

        else if (dropdownMenu == "U.S.A") {
            console.log("I AM HERE US");
            displayUS();
        }
  
}

  