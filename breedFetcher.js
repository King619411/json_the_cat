const request = require('request');

// need to add process.arg statements/vars to remove the first two values printedd
const breed = process.argv[2];

const myCustomURL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const getData = (url) => {
    request(url, (error, response, body) => {
        if (error) {
            console.log('error has occured');
        } else {
            const data = JSON.parse(body);
            if (data.length > 0) {
              console.log('Got information!');
              console.log(data[0].description)
            } 
            else {
              console.log('Could not find breed');
            }
        }
    });
}



getData(myCustomURL);

