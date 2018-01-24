const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4550%20Pearson%20St%20Long%20Island%20City',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(response, undefined, 2));
});
