const request = require('request');

// need to add process.arg statements/vars to remove the first two values printedd
//const breed = process.argv[2];

const myCustomURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


const fetchBreedDescription = function(breedName, callback) {
    request(myCustomURL, (error, response, body) => {
        if (error) {
            callback('Error has occured', null);
        } else {
            const data = JSON.parse(body);

            if (data.length > 0) {
                console.log('Got information!');
                console.log(data[0].description)
            } else {
                callback(`Could not find breed ${breedName}`, null);
            }
        }
    });
};


//getData(myCustomURL);

module.exports = { fetchBreedDescription }


