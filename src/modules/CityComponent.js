import styled from "styled-components";


const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`

const ChooseCityLabel = styled.span`
color:black;
font-size: 18px;
font-weight: bold;
margin: 10px auto;
`

const SearchBox = styled.form`
display: flex;
flex-direction: row;
border: black solid 1px;
border-radius: 2px;
color:black;
font-size: 18px;
font-weight: bold;
margin: 10px auto;
`

const CityComponent = () => {
    return (
        <>
        <WeatherLogo src = "/icons/cloudy.svg"/>
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox>
            <input placeholder="City"/>
            <button>Search</button>
        </SearchBox>
        </>
    )
}

export default CityComponent;