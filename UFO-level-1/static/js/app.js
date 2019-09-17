var button = d3.select(".btn")

var clearButton = d3.select("#clear-btn")
var ufoTable = d3.select("thead")






// YOUR CODE HERE!
button.on("click", function(i){
	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");

	data.forEach((v)=>{
		var row = ufoTable.append("tr");
		if (v.datetime === inputValue){
			row.append("td").text(v.datetime);
			row.append("td").text(v.city)
			row.append("td").text(v.state)
			row.append("td").text(v.country)
			row.append("td").text(v.shape)
			row.append("td").text(v.durationMinutes)
			row.append("td").text(v.comments)
			}
		});



		// row.append("td").text(datetime[0])
		// row.append("td").text(city[0])
		// row.append("td").text(state[0])
		// row.append("td").text(country[0])
		// row.append("td").text(shape[0])
		// row.append("td").text(durationMinutes[0])
		// row.append("td").text(comments[0])

	
	
	// Step 3:  Use `Object.entries` to console.log each weather report value
		// var datetime = Object.values(v)[0];
		// var city = Object.values(v)[1];
		// var state = Object.values(v)[2];
		// var country = Object.values(v)[3];
		// var shape = Object.values(v)[4];
		// var durationMinutes = Object.values(v)[5];
		// var comments = Object.values(v)[6];
	
	
	
		// row.append("td").text(datetime);
		// row.append("td").text(city);
		// row.append("td").text(state);
		// row.append("td").text(country);
		// row.append("td").text(shape);
		// row.append("td").text(durationMinutes);
		// row.append("td").text(comments);
});

clearButton.on("click", function(){
	d3.selectAll("td").remove()
});