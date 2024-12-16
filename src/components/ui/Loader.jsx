import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  color: #fff;
  display: flex;
  top: 0;
  left: 0;
  overflow-y: hidden;

  & div {
    z-index: 9;
    height: 100%;
    width: 100%;
    background-color: #000;
  }
`;

const LoaderContent = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;

  & p {
    position: relative;
    z-index: 9;
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    margin: 0;
    color: #fff;
  }
`;

const LoadingBar = styled.div`
  width: 100%;
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  pointer-events: none;
  z-index: 9;

  & span {
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    transform-origin: left;
    background-color: #fff;
    transition: transform 1s ease-in-out;
    pointer-events: none;
    z-index: 9;
  }

  & p {
    display: inline-block;
    margin-top: 3rem;
    font-size: 1.5rem;
    pointer-events: none;
    z-index: 9;
  }
`;

const BaseLine = styled.div`
  position: absolute;
  top: 1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: red;
`;

const Span = styled.span`
  color: red;
`;

export default function Loader() {
  const { progress, active } = useProgress();
  const loadRef = useRef();
  const barRef = useRef();
  const textContainerRef = useRef();
  const loaderContentRef = useRef();
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    barRef.current.style.transform = `scaleX(${progress}%)`;
    if (!active) {
      setTimeout(() => {
        tl.to(textContainerRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          y: -100,
        })
          .to(
            loadRef.current.children,
            {
              duration: 1,
              height: 0,
              stagger: 0.2,
              ease: "power2.inOut",
            },
            "-=1"
          )
          .to(loaderContentRef.current, {
            display: "none",
            duration: 0,
          });
      }, 1000);
    }
  }, [progress, active, tl]);

  return (
    <>
      <LoaderContent ref={loaderContentRef}>
        <div ref={textContainerRef}>
          <p>
            Andrei - <Span>Creative Frontend </Span> - Developer
          </p>
          <LoadingBar>
            <span ref={barRef} />
            <BaseLine></BaseLine>
            <p>({Math.trunc(progress)}%)</p>
          </LoadingBar>
        </div>
        <StyledLoader ref={loadRef}>
          {[...Array(5)].map((_, index) => (
            <div key={index} />
          ))}
        </StyledLoader>
      </LoaderContent>
    </>
  );
}
