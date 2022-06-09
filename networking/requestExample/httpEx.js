const request = require('request');
const fs = require('fs');

const commandLineInput = process.argv.splice(2);
const hostURL = commandLineInput[0];
const fileLocation = commandLineInput[1];


request(commandLineInput[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (error) {throw new Error("Wrong URL, Please try a valid address.");} // Throwing error in case of wrong url

  fs.writeFile(fileLocation, body, err =>{
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ./index.html`)
  });

});
