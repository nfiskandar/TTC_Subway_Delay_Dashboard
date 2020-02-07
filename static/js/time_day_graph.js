// Assign data from api in a variable
// var data = data;

// Save option text in variable
var subway_lines = ['1: Yonge-University Line','2: Bloor-Danforth Line','3: Scarborough Line','4: Sheppard Line'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var time_groups = ['6-9am','9am-12pm','12-3pm','3-6pm','6-9pm','9pm-1:30am'];
var days = ['Monday','Tuesday','Wednesay','Thursday','Friday','Saturday','Sunday'];


// Select time_subway_filter dropdown
var time_subway_filter = d3.select("#time_subway_filter");

// Add options to dropdown
subway_lines.forEach(subway_line=>time_subway_filter.append("option").text(subway_line));


// Select time_month_filter dropdown
var time_month_filter = d3.select("#time_month_filter");

// Add options to dropdown
months.forEach(month=>time_month_filter.append("option").text(month));


// Select time_day_filter dropdown
var time_day_filter = d3.select("#time_day_filter");

// Add options to dropdown
days.forEach(day=>time_day_filter.append("option").text(day));	
	
	
// Select day_subway_filter dropdown
var day_subway_filter = d3.select("#day_subway_filter");

// Add options to dropdown
subway_lines.forEach(subway_line=>day_subway_filter.append("option").text(subway_line));


// Select day_month_filter dropdown
var day_month_filter = d3.select("#day_month_filter");

// Add options to dropdown
months.forEach(month=>day_month_filter.append("option").text(month));


// Select day_time_filter dropdown
var day_time_filter = d3.select("#day_time_filter");

// Add options to dropdown
time_groups.forEach(time_group=>day_time_filter.append("option").text(time_group));	
	
	/*
	
	
d3.json("./static/data/samples.json").then(function(data){
	
});

// Create fun
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// usage example:
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter( onlyUnique );

console.log(unique);

console.log(onlyUnique(a))


*/