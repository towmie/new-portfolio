import { useGLTF } from "@react-three/drei";

export function Asterisk(props) {
  const { nodes, materials } = useGLTF("/asterisk.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        rotation={[0, 0, 2.373]}
        scale={[0.176, 1, 0.165]}
      />
    </group>
  );
}

useGLTF.preload("/asterisk.glb");
