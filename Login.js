import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Login.css"
import axios from "axios"


export const Login = () =>{
//  const [email, setEmail] = useState(""); //
  //const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    
    const email = event.target.email.value;
    const password = event.target.password.value;
  
     const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (email === storedEmail && password === storedPassword) {
      console.log("Inicio de sesión exitoso");
       navigate("/Movies");
    } else {
      console.error("Datos de inicio de sesión inválido");
     
    }
  };

      return(
      <div className="LoginForm"  >
        <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <a href="#" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
        </div>
        <button type="submit" className="login-button"  >Ingresar</button>
      </form>
    </div>)}
    
