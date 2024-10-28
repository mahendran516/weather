import axios from "axios"
import { useState } from 'react'
import React from 'react'

const Weather = () => {

    const[city, setCity]= useState("")
    const[temp, setTemp] = useState ("")
    const[desc, SetDesc]= useState ("")
    const[weather,SetWeather] = useState ("")
    const[cname, setCname] = useState ("")

    const handleCity = (e) =>
    {
        setCity(e.target.value)
        
    }
    const getWeather = () =>
    {
        var weatherData= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e2f483b43a855cabbdf6c768ba639dd`)
        weatherData.then(function(sucess){
            console.log(sucess);
            
            SetWeather(sucess.data.weather[0].main)
            setTemp(sucess.data.main.temp)
            SetDesc(sucess.data.weather[0].description)
            setCname(sucess.data.name)


            
        })
    }
  return (
    
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-700 to-purple-900 flex flex-col items-center justify-center p-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-md p-10 rounded-xl shadow-2xl max-w-lg w-full text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Weather App</h1>
          <input
            type="text"
            placeholder="Enter city"
            onChange={handleCity}
              className="w-full p-4 rounded-lg shadow-md mb-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
           className="w-full bg-purple-600 text-white py-3 rounded-lg shadow-md transform transition hover:scale-105 "
            onClick={getWeather}
          >
            Get Weather
          </button>
          </div>         
          <div>
         <div className="mt-8 p-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-2xl shadow-2xl text-white ">
         <h2 className="text-4xl font-bold mb-4 text-center">{cname}</h2>
         <div className="text-2xl space-y-2">
         <p className="font-medium">Temperature: {temp}°C</p>
                 <p className="font-medium">Weather: {weather}</p>
                 <p className="font-medium">Description: {desc}</p>
         </div>
                
                 
                 
               </div>
                    
                 </div>
        </div>
        
        
  )
}

export default Weather
