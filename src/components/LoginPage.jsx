import { useState } from "react"
import { Navigate } from "react-router-dom"

export const LoginPage = () => {

    const [logged, setLogged] = useState(false);

    const [nameValue, setNameValue] = useState('');

    const [emailValue, setEmailValue] = useState('')


    const onNameChange = (e) => {
        setNameValue(e.target.value);
        
    }

    const onEmailChange = (e) => {
        setEmailValue(e.target.value);
        
    }
    

    const onSubmit = (e) => {
        e.preventDefault();
        if(nameValue < 1 || emailValue < 1) return
        setLogged(true)
        
    }

    

    

  return (
    <>
        <div className=" w-50 d-flex login-fondo justify-content-center m-5">
        <div className="row">

            <div className="col-12 input-group d-flex justify-content-center pt-5 w-100">
                <span  className="text-white">
                    <h4>Inicia Sesión</h4>
                </span>
                

            </div>

            <div className="col-12 input-group d-flex justify-content-center w-100">
            <form onSubmit={onSubmit}>
                    <input type="text" className="form-control" placeholder="Nombre" name="username" value={nameValue} onChange={onNameChange} />
                    <input type="text" className="form-control" placeholder="Email" name="email" value={emailValue} onChange={onEmailChange}/>
                    <button type="submit">Login</button>
                </form>
            </div>
            </div>
            
                </div>

                {logged && (<Navigate to="player"/>) }
        
        
    </>
  )
}
