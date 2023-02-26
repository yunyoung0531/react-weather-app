import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather는 ", weather)
    
    return (
    <div className='weather-box'>
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp}°C 💙 {weather?.weather[0].description}</h2>
        <h7>Have a good day</h7>
    </div>
    )
}

export default WeatherBox