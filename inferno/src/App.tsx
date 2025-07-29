import { useState } from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";
import { useAudioAnalyser } from "./components/useAudioAnalyser";

function App() {
  const [audioFile, setAudioFile] = useState<File | null>(null);

  useAudioAnalyser(audioFile);

  return (
    <div>
      <FileUpload onFileSelect={setAudioFile} />
    </div>
  );
}

export default App;
