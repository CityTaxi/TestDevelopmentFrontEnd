import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../firebaseConfig";
import Swal from "sweetalert2";
import LoginFormStyles from "../css/LoginForm.module.css";

// Se inicializa la aplicación de Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig);
// Se obtiene la autenticación de Firebase utilizando la aplicación inicializada
const auth = getAuth(app);

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  }

  // Se define la función handleSubmit para manejar el envío del formulario
  function handleSubmit(event) {
    // Se previene el comportamiento predeterminado del evento de envío del formulario
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("accessToken", user.accessToken);
        navigate("/users");
        Swal.fire({
          icon: "success",
          title: "¡Sesión iniciada correctamente!",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
          position: "top",
          padding: "15px",
          width: "250px",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        // Si el código de error indica que el usuario no existe o la contraseña no coincide
        if (
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/wrong-password"
        ) {
          Swal.fire({
            icon: "error",
            title: "Correo electrónico o contraseña incorrectos",
            showConfirmButton: false,
            showCloseButton: true,
            timer: 3000,
          });
        }
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={LoginFormStyles.form}>
        <img
          src="/taxia-life-logo.png"
          alt="Logo Taxia Life"
          className={LoginFormStyles.img}
        />
        <h1>Iniciar sesión</h1>
        <label htmlFor="email" className={LoginFormStyles.label}>
          Correo electrónico:
        </label>
        <input
          type="text"
          className="email"
          id="email"
          onChange={handleInputChange}
          required
          autoComplete="on"
          autoFocus
        />
        <label htmlFor="password" className={LoginFormStyles.label}>
          Contraseña:
        </label>
        <input
          type="password"
          className="password"
          id="password"
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="submit">
          Iniciar sesión
        </button>
      </form>
    </>
  );
}

export default LoginForm;