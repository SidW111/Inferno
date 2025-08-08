import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FireParticles = () => {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const temp: [number, number, number][] = [];
    for (let i = 0; i < 100; i++) {
      const x = (Math.random() - 0.5) * 2;
      const y = Math.random() * 2 - 1;
      const z = Math.random() * 2;
      temp.push([x, y, z]);
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.children.forEach((child) => {
      if (!("position" in child)) return;
      const mesh = child as THREE.Mesh;
      mesh.position.y += delta * 0.5; // 🔥 rise speed

      // 🔁 Loop to bottom
      if (mesh.position.y > 2.5) {
        mesh.position.y = -1;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((pos, idx) => (
        <mesh key={idx} position={[...pos]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color="orange"
            emissive="orange"
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
};

export default FireParticles;
