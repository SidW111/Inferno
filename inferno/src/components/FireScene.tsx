import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import  FireParticles  from "./FireParticles";

const FireScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
        <color attach='background' args={['black']}/>
        <ambientLight intensity={1.2}/>
        <pointLight position={[0,2,5]} intensity={2} color={"orange"} />
        <Suspense fallback={null} >
            <FireParticles/>
        </Suspense>
    </Canvas>
  );
};

export default FireScene;
