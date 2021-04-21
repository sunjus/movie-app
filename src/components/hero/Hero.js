import Nav from "./Navigation/Nav";
import Output from "../output/Output";
import styled from "styled-components";

const Hero = () => {
  return (
    <MainContainer>
      <Nav />
      <Output />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
`;

export default Hero;
