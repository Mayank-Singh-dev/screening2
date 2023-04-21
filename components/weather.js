
import React, { useEffect, useState } from "react";
import {BsSearch} from "react-icons/bs";

const Weather = ( ) => {
  const dates = [];
  const [city,setCity]=useState('Bangalore')
  const [weather,setWeather]=useState('')

  async function getWeatherData(){
    try {
      const serverResponse=await fetch("https://api.openweathermap.org/data/2.5/weather?"+"q="+city+"&appid=67b4dffa36732206aaa9c42f447c3a8c")
      const data=await serverResponse.json()
      console.log(data)
      if(data?.cod==='400') throw data;
      setWeather(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getWeatherData();
  }, []);

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);
    const date = currentDate.getDate()+1;
    const month = currentDate.getMonth() + 1;
    dates.push(`${date}/${month}`);
  }

  return (
    <div className="p-8 bg-blue-200 mt-3 border rounded-lg ml-2 mr-2 lg:ml-64 lg:h-6/6">
      <h1 className="text-4xl mb-4 -mt-2 font-bold">Weather</h1>
      <div className="md:w-4/6 flex flex-row gap-2 justify-center lg:ml-28">
        <input
          className="rounded-2xl px-2 py-2 md:w-3/6"
          type="text"
          placeholder="Search"
          onChange={(e)=>setCity(e.target.value)}
        />
        <button className="px-4 py-2 border rounded-full cursor-pointer bg-blue-500 hover:shadow-lg active:scale-95 active:bg-blue-300 transition transform duration-100 ease-out" onClick={()=>getWeatherData()}>
          <BsSearch/>
        </button>
      </div>
      <div className="text-3xl font-bold text-center">
        <p>{!weather.name?"weather":weather.name}</p>
      </div>
      <div className="text-3xl font-bold text-center">
        <h1>{!weather?'Temprature':Math.round(weather.main.temp - 273.15)}°C</h1>
      </div>
      <div className="pt-2">
        <p className="text-xl font-semibold -ml-4 ">{!weather?'description':weather.weather[0].main}</p>
      </div>
      <div className="grid-cols-2 gap-10">
        <div className="flex flex-row gap-3 justify-center text-center mt-4  ">
          {dates.map((date) => (
            <p className="text-lg font-semibold" key={date}>
              {date}
            </p>
          ))}
        </div>
        <div className="flex flex-row gap-3 justify-center text-center">
          <p className="text-lg font-semibold">{!weather?'T':Math.round(weather.main.temp_min - 273.15)}°C</p>
          <p className="text-lg font-semibold">{!weather?'T':Math.round(weather.main.temp_max - 273.15)}°C</p>
          <p className="text-lg font-semibold">{!weather?'T':Math.round(weather.main.temp_min - 273.15)}°C</p>
          <p className="text-lg font-semibold">{!weather?'T':Math.round(weather.main.temp_max - 273.15)}°C</p>
          <p className="text-lg font-semibold">{!weather?'T':Math.round(weather.main.temp_min - 273.15)}°C</p>
          <p className="text-lg font-semibold">{!weather?'T':Math.round(weather.main.temp_max - 273.15)}°C</p>
          <p className="text-lg font-semibold">{!weather?'T':Math.round(weather.main.temp_min - 273.15)}°C</p>
        </div>
      </div>

      <div className=" flex flex-row p-2 gap-3 mt-4 border-2 border-transparent rounded-md bg-blue-300 justify-between lg:justify-center lg:gap-20">
        <div className="flex flex-col  justify-center text-center pl-2 ">
          <p className="text-xl font-semibold">{!weather?'humidity':weather.main.humidity}</p>
          <p>Humidity</p>
        </div>
        <div className="flex flex-col  justify-center text-center pr-2">
          <p className="text-xl font-semibold">{!weather?'speed':weather.wind.speed}</p>
          <p>wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;

