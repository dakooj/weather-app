const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const forecast = require('./forecast/forecast');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    forecast.getForecast(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      console.log(`Temperature: ${weatherResults.temperature}`);
      console.log(`Real Feel: ${weatherResults.apparentTemperature}`);
    });
  }
});
