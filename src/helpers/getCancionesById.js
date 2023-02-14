import {canciones} from "../data/canciones"


export const getCancionesById = (id) => {
  
    return canciones.find(cancion => cancion.id === id);
}
