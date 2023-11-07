import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/public/untitled4.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        scale={[-1.511, -2.527, -2.527]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.003"]}
        position={[0, 2.131, 0]}
        scale={0.702}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0, 3.076, 0]}
        scale={0.358}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.002"]}
        position={[-0.008, 3.334, -0.021]}
        scale={[1.012, 0.475, 1.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.005"]}
        position={[1.596, -0.045, -0.041]}
        rotation={[1.569, -0.004, 1.573]}
        scale={[1.962, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.006"]}
        position={[1.602, -0.114, 1.682]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.512}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.007"]}
        position={[0.275, -8.678, -0.169]}
        scale={-6.032}
      />
    </group>
  );
}

useGLTF.preload("/public/untitled4.gltf");





