import { useEffect, useState } from "react"
import {dataCanciones} from '../data/dataCanciones'
import musicLogo from "../images/music-logo.png"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"
import { IconContext } from "react-icons"
import { AiOutlineCompress } from "react-icons/ai"
import { AiOutlineFullscreenExit } from "react-icons/ai";
import musicCover from "../images/planet.jpg"
import useSound from "use-sound"
import spirit from "../songs/spirit.mp3"
import neon from "../songs/neon.mp3"
import sweet from "../songs/sweet.mp3"

const canciones = [spirit, neon, sweet]


export const Menu = () => {



const [seconds, setSeconds] = useState('');

const [counter, setCounter] = useState(0)

const [fullScreen, setFullScreen] = useState(false)

const [cancion, setCancion] = useState(canciones[counter])


const [isPlaying, setIsPlaying] = useState(false)

const [play, { pause, stop, duration, sound }] = useSound(cancion);

const [time, setTime] = useState({
  min: "",
  sec: ""
});
const [currTime, setCurrTime] = useState({
  min: "",
  sec: ""
});

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
  pause()
  setIsPlaying(false);

  
}, [counter])


  const playingButtonMenu = (value) => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      
      
    } else {
      setCounter(value);
      play()
      setIsPlaying(true);
      
      
    }
  };

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      
      
    } else {
      play();
      setIsPlaying(true);
      
    }
  };

  const increment = (value = 1) => {
    setCounter( counter + value );
  }

  const reduce = (value) => {
    if( counter === 0 ) return;
    setCounter( counter - value )
  }




  const openFullScreen = () => {
    setFullScreen(true);
  }

  const closeFullScreen = () => {
    setFullScreen(false);
  }

  
    
    
  return (
    <>
    {!fullScreen ? (
      <>
           <div className="container-fluid fondo-menu w-75">
            <div className="row d-flex justify-content-center mt-4">

                <div className="col-lg-3 col-md-6 mx-2">
                    <div className="card ancho bg-black text-white border border-white">
                        <img src={musicLogo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{dataCanciones[0].nombre}</h5>
                          <p className="card-text"></p>
                          {isPlaying ? (
                            <button className="specialbutton" onClick={() => playingButtonMenu(0)}> <span className="text">Pause</span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                          </button>
                          ) : (
                            <button className="specialbutton" onClick={() => playingButtonMenu(0)}> <span className="text">Play</span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                          </button>
                          )

                          }
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mx-2">
                    <div className="card ancho bg-black text-white border border-white">
                        <img src={musicLogo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{dataCanciones[1].nombre}</h5>
                          <p className="card-text"></p>

                          {isPlaying ? (
                            <button className="specialbutton" onClick={() => playingButtonMenu(1)}> <span className="text">Pause</span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                          </button>
                          ) : (
                            <button className="specialbutton" onClick={() => playingButtonMenu(1)}> <span className="text">Play</span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                          </button>
                          )

                          }
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mx-2">
                    <div className="card ancho bg-black text-white border border-white">
                        <img src={musicLogo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{dataCanciones[2].nombre}</h5>
                          <p className="card-text"></p>
                          {isPlaying ? (
                            <button className="specialbutton" onClick={() => playingButtonMenu(2)}> <span className="text">Pause</span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                          </button>
                                   ) : (
                                     <button className="specialbutton" onClick={() => playingButtonMenu(2)}> <span className="text">Play</span>
                                     <span className="blob"></span>
                                     <span className="blob"></span>
                                     <span className="blob"></span>
                                     <span className="blob"></span>
                                   </button>
                                   )

                                   }

                                 </div>
                             </div>
                         </div>
                                 
                                 
                     </div>
                 </div>
                                 
                  <div className={`row barra-reproduccion d-flex justify-content-evenly ${(isPlaying) === true ? 'fixed-bottom m-0' : 'd-none'}`}>
                   <div className="col-2">
                   <span className="spinner">
                     <div className="spinnerin"></div>
                   </span>
                                 
                   </div>
                   <div className="col-3 text-white">Reproduciendo: {dataCanciones[counter].nombre} 
                                 
                                 
                   </div>
                                 
                   <div className="col-3">
                     <button onClick={openFullScreen}>
                     <IconContext.Provider value={{ size: "2em", color: "white", style : {backgroundColor: "black"}  }}>
                       <AiOutlineCompress />
                     </IconContext.Provider>
                     </button>
                   </div>
                                 
                 </div>
                  </>

    ) : (
                        <>
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
                          
                          <button onClick={closeFullScreen}>
                          <IconContext.Provider value={{ size: "2em", color: "white", style : {backgroundColor: "black"}  }}>
                            <AiOutlineFullscreenExit />
                          </IconContext.Provider>
                          </button>
                        </div>
                      </div>
                        </>
                      )
                          
                      }

          
        
    </>
  )
}


