import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../components/LoginPage"
import { Player } from "../components/Player"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={ <LoginPage />}/>
            <Route path="player" element={ <Player />} />
        </Routes>
    
    
    </>
  )
}
