//Assignment 4
//Create functions to filter the headers and bind the relevant contents to those headers.

//import fs module
//import readline module
let fs = require("fs");
let readline = require("readline");

//Required variable declarations for performing the operation
//Declare arrays to store the result
let lineno = 0;

let countries = [], headers = [];

let run = function(){

countries = [], headers = [];
//Create readline interface using createInterface method to read the CSV file 
let rl = readline.createInterface({
input: fs.createReadStream('data/country_details.csv')
});
//Create function to store filtered data into result array. This will store all countries data into an array.
function populateCountriesData(curdata){
	countries.push(curdata);
}
//Create function to store header data into array.
function populateHeaders(lineRecords){
	headers.push(lineRecords);
}
//Create function to read line using readline module and process the contents to filter and split data as needed.
rl.on('line',function(line){
	let lineRecords = line.trim().split(",");

	if(lineno == 0){
		populateHeaders(lineRecords);
	}
	else {
		populateCountriesData(lineRecords);
	}

	lineno++;
});
rl.on('close', function(err){
console.log(headers);
console.log(countries);
});

}
module.exports = {
	exec: run,
	headers: headers,
	data: countries
};

run();