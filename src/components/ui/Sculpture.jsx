import { useGSAP } from "@gsap/react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";

export function Sculpture(props) {
  const { nodes, materials } = useGLTF("/models/laocoon_and_his_sons.glb");
  const modelRef = useRef();
  const { viewport } = useThree();
  const materialProps = useControls({
    thickness: {
      value: 3,
      min: 0,
      max: 3,
      step: 0.01,
    },
    roughness: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.01,
    },
    transmission: {
      value: 0.79,
      min: 0,
      max: 1,
      step: 0.01,
    },
    ior: {
      value: 1.2,
      min: 0,
      max: 3,
      step: 0.01,
    },
    chromaticAberration: {
      value: 0.04,
      min: 0,
      max: 0.1,
      step: 0.08,
    },
    backside: {
      value: true,
      label: "Backside",
    },
  });

  const { position } = useControls({
    position: {
      value: { x: -0.348, y: -20, z: 1 },
      min: -10,
      max: 10,
      step: 0.01,
    },
  });

  return (
    <group {...props} dispose={null} scale={viewport.width / 50}>
      <mesh
        ref={modelRef}
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.None}
        position={[position.x, position.y, position.z]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/laocoon_and_his_sons.gltf");
