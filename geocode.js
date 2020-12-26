const request = require('request');
const geocode = (address, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=32f446ac22bc3346400d809540f18181&query="+address;
  
    request( { url, json: true},(error, response) => {
  
      if(error)
      {
           callback('Check your internet connection',undefined);
      }
      else if(response.body.error)
      {
           callback('Unable to find the location', undefined);
      }
      else
      {
          callback(undefined,{
              latitude : response.body.location.lat,
              longitude : response.body.location.lon,
              name : response.body.location.name
          })
      }
  
    })
  
  }
  
 module.exports = geocode;