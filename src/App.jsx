import styled from "styled-components";
import About from "./components/layout/About";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import Projects from "./components/layout/Projects";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <MainContainer>
        {/* <Hero /> */}
        <About />
        <Projects />
        <Footer />
      </MainContainer>
    </Suspense>
  );
}

export default App;
