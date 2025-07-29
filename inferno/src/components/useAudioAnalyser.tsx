import { useEffect, useRef } from "react"



export const useAudioAnalyser = (file:File|null) => {

    const audioRef= useRef<HTMLAudioElement | null>(null)
    const analyserRef = useRef<AnalyserNode | null>(null)
    const dataArrayRef = useRef<Uint8Array | null>(null) 

    useEffect(() => {
        if(!file)return;

        const audio = new Audio(URL.createObjectURL(file));
        audio.crossOrigin = 'anonymous';
        audioRef.current = audio;

        const context = new AudioContext();
        const source = context.createMediaElementSource(audio);
        const analyser = context.createAnalyser();
        analyser.fftSize=128;

        source.connect(analyser);
        analyser.connect(context.destination);

        analyserRef.current = analyser;

        dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

        audio.play();

        const loop = () => {
            requestAnimationFrame(loop);
            analyser.getByteFrequencyData(dataArrayRef.current!);
            const avg = dataArrayRef.current!.reduce((a,b) => a+b,0)/dataArrayRef.current!.length;

            console.log( "Audio Intensity"+Math.round(avg))
        };

        loop();

        return () => {
            audio.pause();
            audioRef.current = null;
            context.close();
        }
    },[file])

    return audioRef
     
}