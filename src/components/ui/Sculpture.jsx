import { useGSAP } from "@gsap/react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";

export function Sculpture(props) {
  const { nodes, materials } = useGLTF("/models/laocoon_and_his_sons.glb");
  const modelRef = useRef();
  const { viewport } = useThree();

  const materialProps = {
    thickness: 3,
    roughness: 0,
    transmission: 0.79,
    ior: 1.2,
    chromaticAberration: 0.04,
    backside: true,
  };

  return (
    <group {...props} dispose={null} scale={viewport.width / 50}>
      <mesh
        ref={modelRef}
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.None}
        position={[-0.348, -20, 1]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/laocoon_and_his_sons.gltf");
