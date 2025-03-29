import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) =>{

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,setTrack] = useState(songsData[0]);
    const [playStatus,setPlayStatus] = useState(false);
    const [time,setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0  
        }
    })

    const play = () =>{
        audioRef.current.play();
        setPlayStatus(true); 
    }

    const pause = () =>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) =>{
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const prev = async () =>{
        if(track.id > 0){
            await setTrack(songsData[track.id - 1])
            await audioRef.current.play();
            setPlayStatus(true);
        }
        else{
            await setTrack(songsData[songsData.length - 1])
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async () =>{
        if(track.id < songsData.length - 1){
            await setTrack(songsData[track.id + 1])
            await audioRef.current.play();
            setPlayStatus(true);
        }
        else{
            await setTrack(songsData[0])
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        playWithId,
        next,prev,
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
 export default PlayerContextProvider;
 