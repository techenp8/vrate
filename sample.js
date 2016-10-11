//globals
var request = require('request');

// ------url input
var USER_DATA = {
    'payload':'http://30.media.tumblr.com/tumblr_m20ljbf2wy1r3e62yo1_500.jpg'
}


// ----- local file input -  we need to send the input as base 64 conversion for local file.
var local_file = 'sample.jpg'  // provide your local file path
var buffer = fs.readFileSync(local_file)
console.log("response" + response);
console.log("body" + buffer.toString("base64"));

var USER_DATA = {
    'payload': buffer.toString("base64")
}

var options = {
    method: 'POST',
    url: 'https://api2.vrate.net/nudityrating"',
    headers: {
       'Content-Type': 'application/json',
        "x-api-key":"UhS51aGn0K34JcGWiWnJ3azcFS8hAdiV8gjdv7wH"
    },
    json: USER_DATA

};

// Analyze a INPUT image and print the result

function callback(error, response, body) {
    if (!error) {
        var info = JSON.parse(JSON.stringify(body));
        console.log(info);
 	console.log("Rating code: " + info.RatingCode);
 	console.log("Rating Description: " + info.RatingDescription);
    }
    else {
        console.log('Error happened: '+ error);
    }
//send request to vRate API
request(options, callback);
