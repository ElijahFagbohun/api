const http = require('http')

// http is a core module

let url = "http://api.weatherstack.com/current?access_key=01dbc2b4b1aa27d92dc07913406d80d8&query=lagos";


const request = http.request(url, (request) => {

	let data = ''

    request.on('data', (chunk) => {
		data = data + chunk.toString()
		console.log(chunk)
	})
    
	request.on('end', ()=> {
		console.log(data)
		const body = JSON.parse(data)
		
		console.log(`at ${body.location.lat},  
		${body.location.lon} as at ${body.current.observation_time}
		 the temperature at(${body.current.temperature}) is 7b,
		  and weather_description(${body.current.weather_descriptions[0]}) 
		  with wind speed(${body.current.wind_speed}) is g3, 
		  cloud cover (${body.current.cloudcover}) `)
	})

	})
	request.on('error', (error)=>{
		console.log(`We encountered an error, Please try again: ${error}`)

})
request.end()