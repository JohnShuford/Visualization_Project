



// Drop Down Menu **Function**
function populateDropdown() {

    var countries =["Canada","France","Germany","Great Britain","India", "Japan", "Korea", "Mexico","Russia", "U.S.A"];
    
    var select = d3.select("#selDataset");
    
        countries.forEach((id) =>{
            select.append("option")
            .text(id)
            .property("value", id)
        });
  
        //displayUS();  // intial page will load Canada, this was eliminated, instead init function was created.
      }

populateDropdown();


// Menu Option Change **Function**
function optionChanged() {

    // Clears the data of the current page   
    d3.select("#vis").html("");

    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset").node().value;
        console.log(dropdownMenu);

        if (dropdownMenu == "Canada") {
            displayCA();
        }

        else if (dropdownMenu == "Germany") {
            displayDE();
        }

        else if (dropdownMenu == "France") {
            displayFR();
        }

        else if (dropdownMenu == "Great Britain") {
            displayGB();
        }

        else if (dropdownMenu == "India") {
            displayIN();
        }

        else if (dropdownMenu == "Japan") {
            displayJP();
        }

        else if (dropdownMenu == "Korea") {
            displayKR();
        }

        else if (dropdownMenu == "Mexico") {
            displayMX();
        }

        else if (dropdownMenu == "Russia") {
            displayRU();
        }

        else if (dropdownMenu == "U.S.A") {
            displayUS();
        }

}

// Initial the Page with a graph **Function**
// Grab the first value to build the initial html page Dashboard 
function init(){

        // Call display chart function and display the first value in our Country List 
        displayCA();
    };

// Initialize the Dashboard
init();  