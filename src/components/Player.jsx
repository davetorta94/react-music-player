import { useEffect, useState } from "react"
import useSound from "use-sound"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"
import { IconContext } from "react-icons"
import musicCover from "../images/planet.jpg"
import { useCounter } from "../hooks/useCounter"
import {dataCanciones} from "../data/dataCanciones"
import spirit from "../songs/spirit.mp3"
import neon from "../songs/neon.mp3"
import sweet from "../songs/sweet.mp3"

const canciones = [spirit, neon, sweet]

export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  });

  const [seconds, setSeconds] = useState('');

  const { counter, increment, reduce } = useCounter(0)

  const [cancion, setCancion] = useState(canciones[counter]);

  

  const [play, { pause, stop, duration, sound }] = useSound(cancion);
  

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  useEffect(() => {
    setCancion(canciones[counter]);
    setIsPlaying(false);
    stop();
  
    
  }, [counter])
  


  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      
      
    } else {
      play()
      setIsPlaying(true);
      
    }
  };



  return (
    <div className="component d-flex">
      <div className="d-flex justify-content-center">
        <h2>Playing Now</h2>
      </div>
      <img className="musicCover" src={musicCover} />
      <div className="d-flex justify-content-center">
      <h3 className="title">{dataCanciones[counter].nombre}</h3>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center">
        <p>{dataCanciones[counter].fuente}</p>
        </div>
        </div>
      <div className="p-5">
        <div className="time">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p>
        </div>
          <input
                type="range"
                min="0"
                max={duration / 1000}
                default="0"
                value={seconds}
                className="timeline"
                onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
        
      </div>
      <div className="d-flex justify-content-center">
        <button className="playButton" onClick={() => reduce(1)}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton" onClick={() => increment(1)}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}







