import styled from "styled-components";

const WeatherCondition = styled.div`
display: flex;
flex-direction: row;
`

const Condition = styled.span`
display: flex;
flex-direction: row;
`

const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`
const WeatherComponent = () => {
    return (
    <>
    <WeatherCondition>
        <Condition>30 C</Condition>
        <WeatherLogo src="/icons/cloudy.svg" />
    </WeatherCondition>
    </>
    )
}

export default WeatherComponent;