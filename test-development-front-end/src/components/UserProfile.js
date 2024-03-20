import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogOut from "./LogOut";
import UserProfileStyles from "../css/UserProfile.module.css";

library.add(faArrowLeft);

function UserProfile() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, [navigate]);

  function handleReturn() {
    navigate("/users");
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, [username]);

  return (
    <>
      <Helmet>
        <title>Perfil de usuario</title>
      </Helmet>
      <span className={UserProfileStyles["icons"]}>
        <span>
          <FontAwesomeIcon
            onClick={handleReturn}
            icon="fa-solid fa-arrow-left"
            className={UserProfileStyles["return"]}
            title="Regresar"
          />
        </span>
        <span>
          <LogOut />
        </span>
      </span>
      <div>
        <div className={UserProfileStyles["container"]}>
          <h1>{userData.name}</h1>
          <img
            src={userData.avatar_url}
            alt="Foto de perfil"
            title="Foto de perfil"
          />
          <div className={UserProfileStyles["user-data"]}>
            <p>{userData.bio}</p>
            <p>
              <b>Repositories:</b> {userData.public_repos}
            </p>
            <p>
              <b>Followers:</b> {userData.followers}
            </p>
            <p>
              <b>Following:</b> {userData.following}
            </p>
            <p>
              <b>URL: </b>
              <Link to={userData.html_url}>{userData.html_url}</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;