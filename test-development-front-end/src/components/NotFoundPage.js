import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogOut from "./LogOut";
import NotFoundPageStyles from "../css/NotFoundPage.module.css";

library.add(faHouse);

function NotFoundPage() {
  const navigate = useNavigate();

  function handleReturn() {
    navigate("/users");
  }

  return (
    <>
      <Helmet>
        <title>Página no encontrada</title>
      </Helmet>
      <div className={NotFoundPageStyles["container"]}>
        <h1>404 Not Found</h1>
        <span className={NotFoundPageStyles["icons"]}>
          <FontAwesomeIcon
            onClick={handleReturn}
            icon="fa-solid fa-house"
            title="Ir a búsqueda de usuarios"
            className={NotFoundPageStyles["home-icon"]}
          />
          <span>
            <LogOut />
          </span>
        </span>
      </div>
    </>
  );
}

export default NotFoundPage;