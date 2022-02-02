import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import React, { useState } from "react";
import axios from "axios";


const API_KEY ="0d39b62b7cd230f111955dc73528202e"
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 380px;
padding: 20px 10px;
margin: auto;
border-radius: 4px;
box-shadow: 0 3px 6px 0 #555;
background: white;
font-family: Montserrat;
`;

const AppLabel = styled.span`
color: black;
margin: 20px auto;
font-size: 18px;
font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    
    updateWeather(response.data)
  }
  return (
    <Container >
      <AppLabel>The Weather App</AppLabel>
      {weather ? (
        <WeatherComponent weather={weather}/>
      ) : ( 
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
      )}
    </Container>
  );
}

export default App;
