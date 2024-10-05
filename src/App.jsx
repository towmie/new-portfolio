import styled from "styled-components";
import About from "./components/layout/About";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <MainContainer>
      <Hero />
      <About />
      <Footer />
    </MainContainer>
  );
}

export default App;
