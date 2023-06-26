import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./forms.css"

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      alert("Validación correcta!");
      navigate("/");
    } catch (error) {
      alert("Datos Incorrectos!");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate("/");
    }
  });

  return (
    <div className="form-row">
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">    
            <label htmlFor="email">Ingreso al Sistema</label>            
            <input placeholder="Correo electrónico" type="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
            
            <input placeholder="Digite su contraseña" type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className="form-btn-a">
            <button className="btn-acc10">
              Acceder
            </button>
          </div>
          <div className="form-btn-b">
            <button className="btn-reg1">
              <Link to="/register">Registrarse</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
