import About from "./components/layout/About";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #000;
  background-image: url("/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: repeat-y;
  background-blend-mode: hard-light;
  color: #fff;
`;

function App() {
  return (
    <StyledMain>
      <Header />
      <Hero />
      <About />
      <Footer />
    </StyledMain>
  );
}

export default App;
