import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";

export function Asterisk(props) {
  const { nodes } = useGLTF("/asterisk.glb");

  const { viewport } = useThree();
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  const materialProps = useControls({
    thickness: {
      value: 3,
      min: 0,
      max: 3,
      step: 0.01,
    },
    roughness: {
      value: 0.16,
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

  return (
    <group {...props} dispose={null} scale={viewport.width / 10}>
      <mesh
        ref={ref}
        geometry={nodes.Cube004.geometry}
        rotation={[0, 0, 2.373]}
        scale={[0.176, 1, 0.165]}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/asterisk.glb");
