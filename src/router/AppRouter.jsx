import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../components/LoginPage"
import { Player } from "../components/Player"
import { Menu } from "../components/Menu"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={ <Menu />}/>
        </Routes>
    
    
    </>
  )
}

//<Route path="/*" element={ <LoginPage />}/>
// <Route path="player" element={ <Player />} />
 //<Route path="menu" element={ <Menu />} />