// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var resetbtn = d3.select("#reset-filter-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Display the entire dataset as default
var populate = (dataInput) => {

	dataInput.forEach(ufo_sightings => {
		var row = tbody.append("tr");
		columns.forEach(column => row.append("td").text(ufo_sightings[column])
		)
	});
}

//Populate table

populate(data);

// Filter by attribute
button.on("click", () => {
	d3.event.preventDefault();
	var inputDate = inputField1.property("value").trim();
	var filterDate = data.filter(data => data.datetime === inputDate);
	console.log(filterDate)
    var filterData = data.filter(data => data.datetime === inputDate);
	console.log(filterData)

	// Add filtered sighting to table
	tbody.html("");

	let response = {
		filterData, filterDate, 
	}

	if (response.filterData.length !== 0) {
		populate(filterData);
	}
		else {
			tbody.append("tr").append("td").text("No results found!"); 
		}
})

//Resest the filter
resetbtn.on("click", () => {
	tbody.html("");
	populate(data)
	console.log("Table reset")
})