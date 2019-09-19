const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/137c37686408c240d89daf64c7a2caab/' + latitude + ',' + longitude + '?' + 'units=ca' 

    request({ url, json: true }, (error, { body }) => {
        console.log(body.daily.data)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. ' + 'The wind speed is ' + body.daily.data[0].windSpeed + 'km/h with gusts up to ' + body.daily.data[0].windGust + 'km/h')
        }
    })
}

module.exports = forecast