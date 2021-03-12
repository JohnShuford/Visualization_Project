//=========
// Define SVG area dimensions
var svgWidth = 990;
var svgHeight = 690;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 50,
  left: 80
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);
//================================================================
//INTERACTIVE AXIS Functions
//==================================================================
var chosenYAxis = "avg_likes"
//function for updating y-scale var upon click on axis label
function yScale(metricData, chosenYAxis) {
    // create scales
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(metricData, d => d[chosenYAxis])])
        .range([chartHeight, 0]);
    
    return yLinearScale;
  }
// function for updating yAxis var upon click on axis label
function renderAxesY(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);
  
    yAxis.transition()
      .duration(1000)
      .call(leftAxis);
  
    return yAxis;
  }

// function used for updating circles group with a transition to new circles
function renderBars(barGroup, newYScale, chosenYAxis) {

    barGroup.transition()
      .duration(1000)
      .attr("y", d => newYScale(d[chosenYAxis]))
      .attr("height", d => chartHeight - newYScale(d[chosenYAxis]));
  
    return barGroup;
  }

// function used for updating circles group with new tooltip
function updateToolTip(chosenYAxis, barGroup) {

    var label;
  
    if (chosenYAxis === "avg_likes") {
      label = "Average Likes";
    }
    else {
      label = "Average Dislikes";
    }
    
    var numberFormat = d3.format(",");

    var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([80, -60])
        .html(function(d) {
            return (`${d.country} <br> ${label}: ${numberFormat(d[chosenYAxis])}`);
        });
    
    barGroup.call(toolTip);

    // Step 2: Create "mouseover" event listener to display tooltip
    barGroup.on("mouseover", function(data) {
      toolTip.show(data);
    })

    // Step 3: Create "mouseout" event listener to hide tooltip
    .on("mouseout", function(data, index) {
      toolTip.hide(data);
    });

    return barGroup;
  }

//Import Data
d3.csv("data/bar_chart_data/metric_data.csv").then(function(metricData){
    console.log(metricData);

     // Cast the hours value to a number for each piece of tvData
    metricData.forEach(function(d) {
    d.avg_likes = +d.avg_likes;
    d.avg_dislikes = +d.avg_dislikes;
    });

   // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
    var xBandScale = d3.scaleBand()
        .domain(metricData.map(d => d.country))
        .range([0, chartWidth])
        .padding(0.1);

     // Create a linear scale for the vertical axis.
    var yLinearScale = yScale(metricData, chosenYAxis);

    // Create two new functions passing our scales in as arguments
    // These will be used to create the chart's axes
    var bottomAxis = d3.axisBottom(xBandScale);
    var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

    // Append two SVG group elements to the chartGroup area,
    // and create the bottom and left axes inside of them
    var yAxis = chartGroup.append("g")
        .call(leftAxis);

    chartGroup.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis);
    //Grid lines
    chartGroup.append('g')
        .attr('class', 'grid')
        .call(d3.axisLeft()
        .scale(yLinearScale)
        .tickSize(-chartWidth, 0, 0)
        .tickFormat(''))
    // Create one SVG rectangle per piece of tvData
  // Use the linear and band scales to position each rectangle within the chart
    var barGroup = chartGroup.selectAll(".bar")
        .data(metricData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => xBandScale(d.country))
        .attr("y", d => yLinearScale(d[chosenYAxis]))
        .attr("width", xBandScale.bandwidth())
        .attr("height", d => chartHeight - yLinearScale(d[chosenYAxis]));
    //Y Axis Label Group
    var labelsGroup = chartGroup.append("g")
        .attr("transform", "rotate(-90)")
    
    var likesLabel = labelsGroup.append('text')
        .attr('y', 0- chartMargin.left)
        .attr('x', 0- (chartHeight / 2))
        .attr("dy", "1em")
        .attr("value", "avg_likes")
        .classed("active", true)
        .text('# of Likes')

    var dislikesLabel = labelsGroup.append('text')
        .attr('y', 0- chartMargin.left + 20)
        .attr('x', 0- (chartHeight / 2))
        .attr("dy", "1em")
        .attr("value", "avg_dislikes")
        .classed("inactive", true)
        .text('# of Dislikes')
    //X Axis
    chartGroup.append('text')
        .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + 20})`)
        .attr("x", 0)
        .attr("y", 20)
        .attr("class","axis-text")
        .text("Country")

    //update tool tip function
    var barGroup = updateToolTip(chosenYAxis, barGroup)

    //YAxis Event listeners
    labelsGroup.selectAll("text")
        .on("click", function() {
        // get value of selection
        var value = d3.select(this).attr("value");
        if (value !== chosenYAxis) {

      // replaces chosenYAxis with value
        chosenYAxis = value;

        console.log(chosenYAxis)
        
        yLinearScale = yScale(metricData, chosenYAxis);

        yAxis = renderAxesY(yLinearScale, yAxis);

        barGroup = renderBars(barGroup, yLinearScale, chosenYAxis);

        barGroup = updateToolTip(chosenYAxis, barGroup);

        if (chosenYAxis === "avg_likes") {
            likesLabel
                .classed("active", true)
                .classed("inactive", false);
            dislikesLabel
                .classed("active", false)
                .classed("inactive", true);
            }
        else {
            likesLabel
                .classed("active", false)
                .classed("inactive", true)
            dislikesLabel
                .classed("active", true)
                .classed("inactive", false)
            }
        }
    });

});