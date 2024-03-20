import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import LogOutStyles from "../css/LogOut.module.css";

library.add(faArrowRightFromBracket);

const auth = getAuth();

function LogOut() {
  const navigate = useNavigate();

  function handleLogOut() {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("accessToken");
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "¡Cierre de sesión exitoso!",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
          position: "top",
          padding: "5px",
          width: "250px",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "¡Se ha producido un error!",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
          position: "top",
          padding: "15px",
          width: "250px",
        });
      });
  }

  return (
    <>
      <FontAwesomeIcon
        onClick={handleLogOut}
        icon="fa-solid fa-arrow-right-from-bracket"
        className={LogOutStyles["log-out-icon"]}
        title="Cerrar sesión"
      />
    </>
  );
}

export default LogOut;