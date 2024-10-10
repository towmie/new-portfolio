import { useGLTF } from "@react-three/drei";

export function Sculpture(props) {
  const { nodes, materials } = useGLTF("/models/laocoon_and_his_sons.glb");
  console.log(nodes);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.None}
        position={[-0.348, -13.822, 0]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/laocoon_and_his_sons.gltf");
