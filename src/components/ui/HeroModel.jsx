import { Canvas } from "@react-three/fiber";

function HeroModel() {
  return (
    <Canvas id="hero-model">
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </Canvas>
  );
}

export default HeroModel;
