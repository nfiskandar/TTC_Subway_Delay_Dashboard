// Define url
var url = "/delay";

d3.json(url).then(function(data){
	console.log(data);	
	});



// Define function to calculate average
function average(arr){
    //Find the sum
    var sum = 0;
    for(var i in arr) {
        sum += arr[i];
    }
    //Get the length of the array
    var numbersCnt = arr.length;
    //Return the average / mean.
	
    return (sum / numbersCnt);
};

// Save dropdown menu text in variable
var subway_lines = ['Yonge University Spadina','Bloor Danforth','Scarborough Rail Transit','Sheppard'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var time_groups = ['5-9AM','9AM-12PM','12-3PM','3-6PM','6-9PM','9PM-1:30AM'];
var days = ['Monday','Tuesday','Wednesay','Thursday','Friday','Saturday','Sunday'];

	/* Select dropdown menu and add options to dropdown */

// Select time_subway_filter dropdown
// Add options to dropdown
var time_subway_filter = d3.select("#time_subway_filter");
subway_lines.forEach(subway_line=>time_subway_filter.append("option").text(subway_line));

// Select time_month_filter dropdown
// Add options to dropdown
var time_month_filter = d3.select("#time_month_filter");
months.forEach(month=>time_month_filter.append("option").text(month));

// Select time_day_filter dropdown
// Add options to dropdown
var time_day_filter = d3.select("#time_day_filter");
days.forEach(day=>time_day_filter.append("option").text(day));	
		
// Select day_subway_filter dropdown
// Add options to dropdown
var day_subway_filter = d3.select("#day_subway_filter");
subway_lines.forEach(subway_line=>day_subway_filter.append("option").text(subway_line));

// Select day_month_filter dropdown
// Add options to dropdown
var day_month_filter = d3.select("#day_month_filter");
months.forEach(month=>day_month_filter.append("option").text(month));

// Select day_time_filter dropdown
// Add options to dropdown
var day_time_filter = d3.select("#day_time_filter");
time_groups.forEach(time_group=>day_time_filter.append("option").text(time_group));	
	

// Create function init
function init(){
	
	// Get data from json file
	d3.json(url).then(function(data){
		
		// Define init dropdown values 
		var init_subway_value = subway_lines[0];
		var init_month_value = months[0];
		var init_time_value = time_groups[0];
		var init_day_value = days[0];
		
		// Print data
		console.log(init_subway_value);
		console.log(init_month_value);
		console.log(init_time_value);
		console.log(init_day_value);
		
			/* Filter data based on init filter values */
		
		// Filter data for the time graph based on init dropdown values
		var init_time_data_temp1 = data.filter(data=>data.line_name == init_subway_value);
		var init_time_data_temp2 = init_time_data_temp1.filter(data=>data.month == init_month_value);
		var init_time_data = init_time_data_temp2.filter(data=>data.day == init_day_value);
		
		// Filter data for the day graph based on init dropdown values
		var init_day_data_temp1 = data.filter(data=>data.line_name == init_subway_value);
		var init_day_data_temp2 = init_day_data_temp1.filter(data=>data.month == init_month_value);
		var init_day_data = init_day_data_temp2.filter(data=>data.time_range == init_time_value);

			/* Group data by time and date groups */

		// Group data by time groups
		var init_time_data_group1 = init_time_data.filter(data=>data.time_range == time_groups[0]);
		var init_time_data_group2 = init_time_data.filter(data=>data.time_range == time_groups[1]);
		var init_time_data_group3 = init_time_data.filter(data=>data.time_range == time_groups[2]);
		var init_time_data_group4 = init_time_data.filter(data=>data.time_range == time_groups[3]);
		var init_time_data_group5 = init_time_data.filter(data=>data.time_range == time_groups[4]);
		var init_time_data_group6 = init_time_data.filter(data=>data.time_range == time_groups[5]);
		
		// Group data by day groups
		var init_day_data_group1 = init_day_data.filter(data=>data.day == days[0]);
		var init_day_data_group2 = init_day_data.filter(data=>data.day == days[1]);
		var init_day_data_group3 = init_day_data.filter(data=>data.day == days[2]);
		var init_day_data_group4 = init_day_data.filter(data=>data.day == days[3]);
		var init_day_data_group5 = init_day_data.filter(data=>data.day == days[4]);
		var init_day_data_group6 = init_day_data.filter(data=>data.day == days[5]);
		var init_day_data_group7 = init_day_data.filter(data=>data.day == days[6]);
		
			/* Calculate total number of delays and average min delay by time and day groups */		
		
		// Calculate total number of delays for the time graph
		var init_time_graph_num_delays = [];
		init_time_graph_num_delays.push(init_time_data_group1.length);
		init_time_graph_num_delays.push(init_time_data_group2.length);
		init_time_graph_num_delays.push(init_time_data_group3.length);
		init_time_graph_num_delays.push(init_time_data_group4.length);
		init_time_graph_num_delays.push(init_time_data_group5.length);
		init_time_graph_num_delays.push(init_time_data_group6.length);
		
		// Calculate total number of delays for the day graph
		var init_day_graph_num_delays = [];		
		init_day_graph_num_delays.push(init_day_data_group1.length);
		init_day_graph_num_delays.push(init_day_data_group2.length);
		init_day_graph_num_delays.push(init_day_data_group3.length);
		init_day_graph_num_delays.push(init_day_data_group4.length);
		init_day_graph_num_delays.push(init_day_data_group5.length);
		init_day_graph_num_delays.push(init_day_data_group6.length);
		init_day_graph_num_delays.push(init_day_data_group7.length);
		
		// Calculate average min delay for the time graph
		var init_time_graph_avg_delay = [];	
		init_time_graph_avg_delay.push(average(init_time_data_group1.map(data=>parseFloat(data.min_delay))));
		init_time_graph_avg_delay.push(average(init_time_data_group2.map(data=>parseFloat(data.min_delay))));
		init_time_graph_avg_delay.push(average(init_time_data_group3.map(data=>parseFloat(data.min_delay))));
		init_time_graph_avg_delay.push(average(init_time_data_group4.map(data=>parseFloat(data.min_delay))));
		init_time_graph_avg_delay.push(average(init_time_data_group5.map(data=>parseFloat(data.min_delay))));
		init_time_graph_avg_delay.push(average(init_time_data_group6.map(data=>parseFloat(data.min_delay))));
		
		// Calculate average min delay for the day graph
		var init_day_graph_avg_delay = [];	
		init_day_graph_avg_delay.push(average(init_day_data_group1.map(data=>parseFloat(data.min_delay))));
		init_day_graph_avg_delay.push(average(init_day_data_group2.map(data=>parseFloat(data.min_delay))));
		init_day_graph_avg_delay.push(average(init_day_data_group3.map(data=>parseFloat(data.min_delay))));
		init_day_graph_avg_delay.push(average(init_day_data_group4.map(data=>parseFloat(data.min_delay))));
		init_day_graph_avg_delay.push(average(init_day_data_group5.map(data=>parseFloat(data.min_delay))));
		init_day_graph_avg_delay.push(average(init_day_data_group6.map(data=>parseFloat(data.min_delay))));
		init_day_graph_avg_delay.push(average(init_day_data_group7.map(data=>parseFloat(data.min_delay))));
			
		data.min_delay = +data.min_delay;
		
		console.log(init_time_data_group1.map(data=>parseFloat(data.min_delay)));
		console.log(average(init_time_data_group1.map(data=>parseFloat(data.min_delay))));
		console.log(average([4,5,4]));
		console.log(data.min_delay);
		console.log(init_time_graph_num_delays);
		console.log(init_day_graph_num_delays);
		console.log(init_time_graph_avg_delay);
		console.log(init_day_graph_avg_delay);	
			
			
			/* Create time bar chart */
		
		// Define trace 1
		var time_trace1 = {
		  x: time_groups,
		  y: init_time_graph_num_delays,
		  text: `Subway Line: ${init_subway_value}<br>
					Month: ${init_month_value}<br>
					Day: ${init_day_value}<br>
					Time: ${time_groups}<br>
					Number of Delays: ${init_time_graph_num_delays}`,
		  name: 'Number of Delays',
		  type: 'scatter'
		};

		// Define trace 2
		var time_trace2 = {
		  x: time_groups,
		  y: init_time_graph_avg_delay,
		  text: `Subway Line: ${init_subway_value}<br>
					Month: ${init_month_value}<br>
					Day: ${init_day_value}<br>
					Time: ${time_groups}<br>
					Average Delay: ${init_time_graph_avg_delay} minutes`,
		  name: 'Average Delay In Minutes',
		  yaxis: 'y2',
		  type: 'scatter'
		};

		// Define data
		var time_data = [time_trace1, time_trace2];
			
		// Define layout
		var time_layout = {
		  title: 'Number of Delays and Average Minimum Delay By Time of Day',
		  xaxis: {title: 'Time of Day'},
		  yaxis: {
			  title: 'Total Number of Subway Delays',
			  titlefont: {color: '#1f77b4'},
			  tickfont: {color: '#1f77b4'},
		  },
		  yaxis2: {
			title: 'Average Delay To Subway Service (Minutes)',
			titlefont: {color: '#ff7f0e'},
			tickfont: {color: '#ff7f0e'},
			overlaying: 'y',
			side: 'right'
		  }
		};
				
		// Plot graph
		Plotly.newPlot("time",time_data,time_layout);
		
			/* Create day bar chart */
		
		// Define trace 1
		var day_trace1 = {
		  x: days,
		  y: init_day_graph_num_delays,
		  text: `Subway Line: ${init_subway_value}<br>
					Month: ${init_month_value}<br>
					Time: ${init_time_value}<br>
					Day: ${days}<br>
					Number of Delays: ${init_day_graph_num_delays}`,
		  name: 'Number of Delays',
		  type: 'scatter'
		};

		// Define trace 2
		var day_trace2 = {
		  x: days,
		  y: init_day_graph_avg_delay,
		  text: `Subway Line: ${init_subway_value}<br>
					Month: ${init_month_value}<br>
					Time: ${init_time_value}<br>
					Day: ${days}<br>
					Average Delay: ${init_day_graph_avg_delay} minutes`,
		  name: 'Average Delay In Minutes',
		  yaxis: 'y2',
		  type: 'scatter'
		};

		// Define data
		var day_data = [day_trace1, day_trace2];
			
		// Define layout
		var day_layout = {
		  title: 'Number of Delays and Average Minimum Delay By Day f Week',
		  xaxis: {title: 'Day of Week'},
		  yaxis: {
			  title: 'Total Number of Subway Delays',
			  titlefont: {color: '#1f77b4'},
			  tickfont: {color: '#1f77b4'},
		  },
		  yaxis2: {
			title: 'Average Delay To Subway Service (Minutes)',
			titlefont: {color: '#ff7f0e'},
			tickfont: {color: '#ff7f0e'},
			overlaying: 'y',
			side: 'right'
		  }
		};
				
		// Plot graph
		Plotly.newPlot("day",day_data,day_layout);
		
	});
		
};

// Call function init
init();

// Create optionChanged function - Referenced in HTML file
function optionChanged(){
	
	// Define data
	d3.json(url).then(function(data){
	
		// Save current dropdown values 
		var current_time_subway_value = d3.select("#time_subway_filter").property("value");
		var current_time_month_value = d3.select("#time_month_filter").property("value");
		var current_time_day_value = d3.select("#time_day_filter").property("value");
		var current_day_subway_value = d3.select("#day_subway_filter").property("value");
		var current_day_month_value = d3.select("#day_month_filter").property("value");
		var current_day_time_value = d3.select("#day_time_filter").property("value");
		
					/* Filter data based on current filter values */
		
		// Filter data for the time graph based on current dropdown values
		var current_time_data_temp1 = data.filter(data=>data.line_name == current_subway_value);
		var current_time_data_temp2 = current_time_data_temp1.filter(data=>data.month == current_month_value);
		var current_time_data = current_time_data_temp2.filter(data=>data.day == current_day_value);
		
		// Filter data for the day graph based on current dropdown values
		var current_day_data_temp1 = data.filter(data=>data.line_name == current_subway_value);
		var current_day_data_temp2 = current_day_data_temp1.filter(data=>data.month == current_month_value);
		var current_day_data = current_day_data_temp2.filter(data=>data.time_range == current_time_value);

			/* Group data by time and date groups */

		// Group data by time groups
		var current_time_data_group1 = current_time_data.filter(data=>data.time_range == time_groups[0]);
		var current_time_data_group2 = current_time_data.filter(data=>data.time_range == time_groups[1]);
		var current_time_data_group3 = current_time_data.filter(data=>data.time_range == time_groups[2]);
		var current_time_data_group4 = current_time_data.filter(data=>data.time_range == time_groups[3]);
		var current_time_data_group5 = current_time_data.filter(data=>data.time_range == time_groups[4]);
		var current_time_data_group6 = current_time_data.filter(data=>data.time_range == time_groups[5]);
		
		// Group data by day groups
		var current_day_data_group1 = current_day_data.filter(data=>data.day == days[0]);
		var current_day_data_group2 = current_day_data.filter(data=>data.day == days[1]);
		var current_day_data_group3 = current_day_data.filter(data=>data.day == days[2]);
		var current_day_data_group4 = current_day_data.filter(data=>data.day == days[3]);
		var current_day_data_group5 = current_day_data.filter(data=>data.day == days[4]);
		var current_day_data_group6 = current_day_data.filter(data=>data.day == days[5]);
		var current_day_data_group7 = current_day_data.filter(data=>data.day == days[6]);
		
			/* Calculate total number of delays and average min delay by time and day groups */
		
		// Calculate total number of delays for the time graph
		var current_time_graph_num_delays = [];
		current_time_graph_num_delays.push(current_time_data_group1.length);
		current_time_graph_num_delays.push(current_time_data_group2.length);
		current_time_graph_num_delays.push(current_time_data_group3.length);
		current_time_graph_num_delays.push(current_time_data_group4.length);
		current_time_graph_num_delays.push(current_time_data_group5.length);
		current_time_graph_num_delays.push(current_time_data_group6.length);
		
		// Calculate total number of delays for the day graph
		var current_day_graph_num_delays = [];		
		current_day_graph_num_delays.push(current_day_data_group1.length);
		current_day_graph_num_delays.push(current_day_data_group2.length);
		current_day_graph_num_delays.push(current_day_data_group3.length);
		current_day_graph_num_delays.push(current_day_data_group4.length);
		current_day_graph_num_delays.push(current_day_data_group5.length);
		current_day_graph_num_delays.push(current_day_data_group6.length);
		current_day_graph_num_delays.push(current_day_data_group7.length);
		
		// Calculate average min delay for the time graph
		var current_time_graph_avg_delay = [];	
		current_time_graph_avg_delay.push(average(current_time_data_group1.map(data=>parseFloat(data.min_delay))));
		current_time_graph_avg_delay.push(average(current_time_data_group2.map(data=>parseFloat(data.min_delay))));
		current_time_graph_avg_delay.push(average(current_time_data_group3.map(data=>parseFloat(data.min_delay))));
		current_time_graph_avg_delay.push(average(current_time_data_group4.map(data=>parseFloat(data.min_delay))));
		current_time_graph_avg_delay.push(average(current_time_data_group5.map(data=>parseFloat(data.min_delay))));
		current_time_graph_avg_delay.push(average(current_time_data_group6.map(data=>parseFloat(data.min_delay))));
		
		// Calculate average min delay for the day graph
		var current_day_graph_avg_delay = [];	
		current_day_graph_avg_delay.push(average(current_day_data_group1.map(data=>parseFloat(data.min_delay))));
		current_day_graph_avg_delay.push(average(current_day_data_group2.map(data=>parseFloat(data.min_delay))));
		current_day_graph_avg_delay.push(average(current_day_data_group3.map(data=>parseFloat(data.min_delay))));
		current_day_graph_avg_delay.push(average(current_day_data_group4.map(data=>parseFloat(data.min_delay))));
		current_day_graph_avg_delay.push(average(current_day_data_group5.map(data=>parseFloat(data.min_delay))));
		current_day_graph_avg_delay.push(average(current_day_data_group6.map(data=>parseFloat(data.min_delay))));
		current_day_graph_avg_delay.push(average(current_day_data_group7.map(data=>parseFloat(data.min_delay))));

			/* Update time bar graph */
		
		// Define data
		var time_update = {
		  y: [current_time_graph_num_delays,
			  current_time_graph_avg_delay],
		  text: [`Subway Line: ${current_time_subway_value}<br>
					Month: ${current_time_month_value}<br>
					Day: ${current_time_day_value}<br>
					Time: ${time_groups}<br>
					Number of Delays: ${current_time_graph_num_delays}`,
				 `Subway Line: ${current_time_subway_value}<br>
					Month: ${current_time_month_value}<br>
					Day: ${current_time_day_value}<br>
					Time: ${time_groups}<br>
					Average Delay: ${current_time_graph_avg_delay} minutes`]
		};
		
		// Retyle graph
		Plotly.restyle("time",time_update,[0,1]);
		
			/* Update day bar graph */ 
		
		// Define data
		var day_update = {
		  y: [current_day_graph_num_delays,
			  current_day_graph_avg_delay],
		  text: [`Subway Line: ${current_day_subway_value}<br>
					Month: ${current_day_month_value}<br>
					Time: ${current_day_time_value}<br>
					Day: ${days}<br>
					Number of Delays: ${current_day_graph_num_delays}`,
				`Subway Line: ${current_day_subway_value}<br>
					Month: ${current_day_month_value}<br>
					Time: ${current_day_time_value}<br>
					Day: ${days}<br>
					Average Delay: ${current_day_graph_avg_delay} minutes`]
		};
		
		// Retyle graph
		Plotly.restyle("day",day_update,[0,1]);

	});
	
};