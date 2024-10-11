/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Ast(props) {
  const { nodes } = useGLTF("/models/ast.glb");
  const astRef = useRef();

  useFrame(() => {
    if (astRef.current) {
      astRef.current.rotation.x += 0.01;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={astRef}
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        scale={-5.1}
        rotation={[Math.PI / 2, 0, 0]} // Rotate 90 degrees on the x-axis
      />
    </group>
  );
}

useGLTF.preload("/models/ast.glb");
