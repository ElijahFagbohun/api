const request = require('request')

const  url = "http://api.weatherstack.com/current?access_key=670696949017b6a2a9ff5357c7a2fce5&query=lagos";

request({url:url}, (error, response) => {

    if(error){
        console.log( "we encountered an " + error)
    }
    else{
        let res = JSON.parse(response.body) //convert res to a object
      //  console.log(res)
        console.log( `${res.location.name} today, as at
            ${ res.current.observation_time}, it was ${res.current.weather_descriptions[0]}
            with wind speed of about ${res.current.wind_speed} 
             meters per second`)
    }
})