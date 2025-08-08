// import { useState } from "react";
// import "./App.css";
// import FileUpload from "./components/FileUpload";
// import { useAudioAnalyser } from "./components/useAudioAnalyser";

// function App() {
//   const [audioFile, setAudioFile] = useState<File | null>(null);

//   useAudioAnalyser(audioFile);

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col gap-4">
//       <h1 className="text-2xl font-bold">🔥 Audio Visualizer</h1>
//       <div>
//         <FileUpload onFileSelect={setAudioFile} />
//       </div>
//     </div>
//   );
// }

// export default App;


// src/App.tsx
// import FireScene from "./components/FireScene";

// const App = () => {
//   return (
//     <div className="w-screen h-screen overflow-hidden">
//       <FireScene />
//       <div
//   className="absolute top-0 left-0 text-white z-50 bg-black"
//   style={{ padding: "8px" }}
// >
//   UI Layer Working
// </div>
//       <div className="absolute top-4 left-4 z-10 text-white">
//         <h1 className="text-3xl font-bold">🔥 Musix Fire</h1>
//       </div>
//     </div>
//   );
// };

// export default App;

import { Canvas } from "@react-three/fiber";
import FireParticles from "./components/FireParticles";

const App = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <FireParticles/>
      </Canvas>
    </div>
  );
};

export default App;
