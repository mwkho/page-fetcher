const request = require('request');
const fs = require('fs');

let write = function(body, FILENAME){

}
// output is Downloaded and saved 1235 bytes to ./index.html. 

// get the arguments and check for validity
let args = process.argv;
let argLength = args.length;

let main = () => {
  if (argLength !== 4) {
    console.log("Usage: node fetcher.js URL FILENAME");
    return
  }

  let URL = args[2];
  let FILENAME = args[3];

  request(URL, (error, response, body) => {
    if (error){
        console.log('Error:', error)
        return;
    }
    fs.writeFile(FILENAME, body, (error) => {
      if (error){
        console.log("The file you have provided is a directory or invalid filename");
        // fs.close();
        return
      }
      console.log('Downloaded and saved', body.length ,'bytes to', FILENAME,'.');
    });
  });
}

main()
