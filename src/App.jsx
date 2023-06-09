import { useState,useEffect } from 'react'
import './App.css'
import React from 'react';
import Carousel from './components/Carousel';
import WeekSlide from './components/WeekSlide';
import Highlights from './components/Highlights';

function App() {
  const [tab,setTab] = useState(Carousel);
  const [data, setData] = useState(null);
  const [temp,setTemp] = useState(null);
  const [location,setLocation] = useState(null);
  const [hourly,setHourly] = useState(null);
  const [daily,setDaily] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tomorrow.io/v4/weather/forecast?location=delhi&apikey=g0XTkym6hUmWvIXfXfkIjwiu4PSEsyZn');
        const json = await response.json();
        if(json){
              // console.log(json)
        // setData(json);
        // setTemp(json.timelines.hourly[0].values.temperature)
        // setHourly(json.timelines.hourly.slice(0,23))
        // setDaily(json.timelines.daily.slice(0,23))
        // setTemp(json.timelines.hourly[0].values.temperature)
        // setLocation(json.location.name);
        // console.log(json)
        }
      } 
      catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function handleClick(e){
    e.preventDefault();
    setTab(WeekSlide(daily));
  }
  function handleClick2(e){
    e.preventDefault();
    setTab(Carousel)
  }

  return (
      <div className='container'>
        <div className='top'>
          <div className='temp-card'>
          <img alt='image' className='weather-image' src='../src/assets/sun.png' />
          <h2>{temp}'c</h2>
          </div>
          <div className='search-card'>
          <div className='search-icon'>
            <i class="fi fi-br-search"/>
          </div>
          <input type='text' className='search-box' placeholder='search for places...'/>
          <div className='location-icon'>
            <i class="fi fi-br-marker"/>
          </div>
          </div>
          <div className='time-place'>
            <p>{new Date().toLocaleTimeString()}</p>
            <p>{location}</p>
          </div>
        </div>
        <div className='toggler'>
          <button className='toggle-button' onClick={handleClick2}>Today</button>
          <button className='toggle-button' onClick={handleClick}>Week</button>
        </div>
        {tab}
        <Highlights/>
    </div>
  )
}

export default App