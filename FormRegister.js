import { useState } from "react";
import axios from "axios";
import "./FormRegister.css";

export const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [names, setNames] = useState("");
  const [age, setAge] = useState(0);

  const handleRegistro = (event) => {
    event.preventDefault();

    // Guardar los datos en localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("names", names);
    localStorage.setItem("age", age);

    

    
    setEmail("");
    setPassword("");
    setNames("");
    setAge(0);
  };

  return (
    <form className="Form" onSubmit={handleRegistro}>
      <h2>Register</h2>
      <div className="caja">
        <label className="label1">email</label>
        <input
          className="input1"
          type="email"
          name="mail"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
      </div>
      <div className="caja">
        <label className="label1">password</label>
        <input
          className="input1"
          type="password"
          name="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
      </div>
      <div className="caja">
        <label className="label1">names</label>
        <input
          className="input1"
          type="text"
          name="names"
          value={names}
          onChange={(ev) => setNames(ev.target.value)}
        />
      </div>
      <div className="caja">
        <label className="label1">age</label>
        <input
          className="input1"
          type="number"
          name="age"
          value={age}
          onChange={(ev) => setAge(ev.target.value)}
        />
      </div>
      <div className="caja2">
        <button className="boton1" type="submit">
          Registrarse
        </button>
      </div>
    </form>
  );
};