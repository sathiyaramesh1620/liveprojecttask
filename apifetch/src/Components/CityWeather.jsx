import React, { useState } from 'react'
import "./CityWeather.css"
const CityWeather = () => {

const [city, setCity] = useState("")
 const [weatherInfo, setWeatherInfo] = useState(null)
function getWeather(){
    const apiKey="dcb3b76a67b8c4744512b7b6895dc152";
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
     console.log( data)

    let MT=Math.round(data.main.temp);
    let FL=Math.round(data.main.feels_like)

    const weather={
        location:`Weather in ${data.name}`,
        temperature:`Temperature:${MT} C`,
        feelslike:`Feels Like:${FL} C`,
        humidity:`Humidity:${data.main.humidity}%`,
        wind:`Wind:${data.wind.speed} k/m`,
        condition:`weather Condition:${data.weather[0].description}`
    
    }
    setWeatherInfo(weather)

     
    })
    .catch((error)=>{
        console.error(error)
    })
 }
//   getWeather()


 return (
    <div className=' weather-container mt-5 '>
        <input type="text"
        placeholder='Enter city name'
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        />
        <button onClick={getWeather}>  Get Weather</button>


        {weatherInfo &&(

            <div className='weather-info'>
                <h3 className='location'>{weatherInfo.location}</h3>
                <h3>{weatherInfo.temperature}</h3>
                <h3>{weatherInfo.feelslike}</h3>
                <h3>{weatherInfo.humidity}</h3>
                <h3>{weatherInfo.wind}</h3>
                <h3>{weatherInfo.condition}</h3>
            </div>
        )}
    </div>
)

   

    }
   


export default CityWeather