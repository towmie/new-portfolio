import vertexShader from "../../shaders/bg/vertex.glsl";
import fragmentShader from "../../shaders/bg/fragment.glsl";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function WavyBackground() {
  const shaderRef = useRef();

  useFrame((state) => {
    if (shaderRef.current) {
      const uniforms = shaderRef.current.uniforms;
      uniforms.uTime.value = state.clock.elapsedTime;
    }
  });
  return (
    <>
      <group>
        <mesh position={[0, 0, -1]}>
          <planeGeometry args={[10, 5, 512, 512]} />
          <shaderMaterial
            ref={shaderRef}
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={{
              uBigFrequency: {
                value: new THREE.Vector2(8, 8),
              },
              uTime: { value: 0 },
              uSpeed: { value: 0.01 },
              uDepthColor: {
                value: new THREE.Color("#c8c8c8"),
              },
              uSurfaceColor: {
                value: new THREE.Color("#ff0404"),
              },
            }}
          />
        </mesh>
      </group>
    </>
  );
}

export default WavyBackground;
