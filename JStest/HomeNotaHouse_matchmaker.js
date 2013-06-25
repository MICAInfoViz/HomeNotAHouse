// THIS IS THE ALGORITHM THAT MATCHES AND SORTS BALTIMORE NEIGHBORHOODS ACCORDING TO USER INPUTS
// Get the JSON data about neighborhoods
$.getJSON( "CSAdata_sales-crime.json", function(data){
	
	//Initialize output var
	var cities = '';
	
	//Cycle through the json array to get the city names and load it into the list
	for(var i = 0; i < data.length; i++)
	cities += '<li>' + data[i].CSA2000 + '</li>';
	
 	//finally, put it in the html of our list tag
	$('ul.my-new-list').html(cities);

});

alert(pricevalues.length);

//var housingPrices = an array of price ranges
//var crimeRates = an array of crime rate ranges




/*
// One big function to run all the matching and scoring
function  findNeighborhood {
	
	var pricevalues = stores the housing price value selected by the user
	var crimevalues = stores the crime rate value selected by the user
	
	for every neighborhood_name in neighborhoods {
	
		// Checks if any of the neighborhood crime rates match the selected range
		if crime_rate == selectedCrime {
			crime_match == true
		} else {
			crime_match == false
		};
		
		// Check if any of the neighborhood house prices match the selected range
		if house_price {
			house_price == true
		} else {
			house_price == false
		};
		
		// Checks if any of the neighborhoods have both a price match and crime match
		if crime_rate, house_price == true {
			write.html("the perfect match! (or something)")
		};
		
		// Assign a score to each neighborhood. Thanks Rob!
		var hoodScore = SQRT( (price_desired - price_neigh)^2 + (crime_desired - crime_neigh)^2 )
	
	};
	
	// Display the results by writing HTML
	document.GetElementbyID("neighborhood_profile").innerHTML {
		// This puts whatever HTML element we need to display the results
		// I have no idea what I'm doing here. I want it to select three lowest scores.
		neighborhoods.hoodScore[0]
		neighobrhoods.hoodScore[1]
		neighborhoods.hoodScore[2]
	};

}

// Another function to create visualizations of trends, using D3. THIS IS NOT FINISHED YET
d3.json("csa2010.json", function(json) {

	// turns strings into number values
	json.forEach(function(d) {
        d.wordcount = +d.wordcount
    });

});
*/



// Comments by Anthony: You have two different sections to the algorithm, first just checking if a neighborhood is a match, and then a more precise way to measure and sort them. The second option is more powerful and might be the right thing to do from the beginning. With it, if there are many matches, you can return only the best, and if there are few matches still return the best, even if they are not perfect.

// Consider just having one loop through all of the neighborhoods in which you test if it the neighborhoods are within the ranges and assign true/false values in each based on if they are within the ranges. Then also assign a score to each one based on some combination* of the distance from the range for each metric (as you have done in the second half). Then we can sort that array and return the best options.

// *Think about how multiple metrics can be combined into a single score. What makes a better neighborhood, one metric that's very bad, or two that are ok. This is also something that will be easier to experiment with once we have some code written so we can actually test results very quickly. 