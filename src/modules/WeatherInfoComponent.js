import styled from "styled-components";

const WeatherCondition = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
justitfy-content: space-between;
margin: 30px auto;
`

const Condition = styled.span`
margin:20px auto;
font-size: 14px;
& span{
    font-size: 28px;
}
`

const WeatherLogo = styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
`
const Location=styled.span`
font-size:28px;
font-weight:bold;
`

const WeatherComponent = () => {
    return (
    <>
    <WeatherCondition>
        <Condition><span>30 c</span> | Cloudy</Condition>
        <WeatherLogo src="/icons/cloudy.svg" />
    </WeatherCondition>
    <Location>London, GB</Location>
    </>
    )
}

export default WeatherComponent;