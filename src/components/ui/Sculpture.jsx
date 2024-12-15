import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Sculpture(props) {
  const { nodes, materials } = useGLTF("/models/laocoon_and_his_sons.glb");
  const modelRef = useRef();
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 768;

  const materialProps = {
    thickness: 3,
    roughness: 0,
    transmission: 0.79,
    ior: 1.2,
    chromaticAberration: 0.04,
    backside: true,
  };

  return (
    <group
      {...props}
      dispose={null}
      scale={isMobile ? viewport.width / 30 : viewport.width / 50}
    >
      <mesh
        ref={modelRef}
        frustumCulled={true}
        geometry={nodes.Object_2.geometry}
        material={materials.None}
        position={[
          isMobile ? 0 : -0.348,
          isMobile ? -24 : -20,
          isMobile ? 10 : 1,
        ]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/laocoon_and_his_sons.gltf");
