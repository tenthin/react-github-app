import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CityComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeatherComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container >
      The Weather App
      <CityComponent>CityComponent</CityComponent>
      <WeatherComponent>WeatherComponent</WeatherComponent>
    </Container>
  );
}

export default App;
