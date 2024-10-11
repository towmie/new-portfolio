import styled from "styled-components";
import About from "./components/layout/About";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import Projects from "./components/layout/Projects";
import { Suspense, useRef } from "react";
import { useProgress } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { Loader } from "@react-three/drei";

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledLoader = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  color: #fff;
  display: flex;
  top: 0;
  left: 0;

  & div {
    height: 100%;
    width: 100%;
    background-color: #000;
  }
`;

function Loader() {
  const { progress, active } = useProgress();
  const loadRef = useRef();

  useGSAP(() => {
    if (!active) {
      gsap.to(loadRef.current.children, {
        duration: 1,
        height: 0,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    }
  });

  return (
    <StyledLoader ref={loadRef}>
      {[...Array(5)].map((_, index) => (
        <div key={index} />
      ))}
    </StyledLoader>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <MainContainer>
        <Hero />
        <About />
        <Projects />
        <Footer />
      </MainContainer>
      <Loader />
    </Suspense>
  );
}

export default App;
