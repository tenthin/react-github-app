import styled from "styled-components";


const WeatherLogo = styled.image`
width: 140px;
height: 140px;
margin: 40px auto;
`
const CityComponent = () => {
    return (
        <>
        <WeatherLogo src = "/icons/cloudy.svg"/>
        </>
    )
}

export default CityComponent;