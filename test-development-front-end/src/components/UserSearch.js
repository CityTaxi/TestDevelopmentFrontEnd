import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import Chart from "chart.js/auto"; // Importación necesaria para que el gráfico pueda funcionar
import { Bar } from "react-chartjs-2";
import LogOut from "./LogOut";
import UserSearchStyles from "../css/UserSearch.module.css";

library.add(faUser, faMagnifyingGlass);

function UserSearch() {
  const [username, setUsername] = useState("");
  const [userFound, setUserFound] = useState([]);
  const [followers, setFollowers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Si no se encuentra el token de acceso en el almacenamiento local
    if (!localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, [navigate]);

  // Se define la función handleUsernameChange para manejar el cambio en el campo de nombre de usuario
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  // Se define la función userSearchValidator para validar la búsqueda de usuario
  function userSearchValidator(username) {
    if (username.length < 4) {
      Swal.fire({
        icon: "info",
        title: "El nombre de usuario debe contener un mínimo de 4 caracteres",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3000,
      });
      // Se devuelve true para indicar que la validación ha fallado
      return true;
    }
  }

  // Se define la función taxiaLifeSearchValidator para validar la búsqueda de TaxiaLife
  function taxiaLifeSearchValidator(username) {
    if (username.toLowerCase() === "taxialife") {
      Swal.fire({
        icon: "info",
        title: "La búsqueda de TaxiaLife no está permitida",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3000,
      });
      // Se devuelve true para indicar que la validación ha fallado
      return true;
    }
  }

  // Se define la función handleSearch para manejar el envío de la búsqueda
  function handleSearch() {
    if (userSearchValidator(username) || taxiaLifeSearchValidator(username)) {
      return;
    }

    fetch(`https://api.github.com/search/users?q=${username}`)
      .then((response) => response.json())
      .then((data) => {
        const firstTenUsers = data.items.slice(0, 10);
        setUserFound(firstTenUsers);

        const followersPromises = firstTenUsers.map((user) =>
          fetch(`https://api.github.com/users/${user.login}`)
            .then((response) => response.json())
            .then((userData) => userData.followers)
        );

        Promise.all(followersPromises)
          .then((followersCount) => {
            // Se actualiza el estado de los seguidores con el número de seguidores de cada usuario
            setFollowers(followersCount);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));

    setUsername("");
  }

  const chartData = {
    // Se obtienen los nombres de usuario para las etiquetas del gráfico
    labels: userFound.map((user) => user.login),
    datasets: [
      {
        label: "Followers",
        backgroundColor: "#86e315",
        data: followers,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
  };

  return (
    <>
      <Helmet>
        <title>Búsqueda de usuarios</title>
      </Helmet>
      <span className={UserSearchStyles["icon"]}>
        <LogOut />
      </span>
      <div className={UserSearchStyles["container"]}>
        <FontAwesomeIcon
          icon="fa-solid fa-user"
          className={UserSearchStyles["user-icon"]}
        />
        <h1>Usuarios de GitHub</h1>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Buscar usuario"
          required
        />
        <button onClick={handleSearch}>
          <span>
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              className={UserSearchStyles["search-icon"]}
              title="Buscar"
            />
          </span>
        </button>
        <table className={UserSearchStyles.table}>
          <thead>
            <tr>
              <th>Username</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {userFound.map((user) => (
              <tr key={user.id}>
                <td>
                  <Link
                    to={`/users/${user.login}`}
                    className={UserSearchStyles.a}
                  >
                    {user.login}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/users/${user.login}`}
                    className={UserSearchStyles.a}
                  >
                    {user.id}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Bar
        data={chartData}
        options={chartOptions}
        className={UserSearchStyles["bar-chart"]}
      />
    </>
  );
}

export default UserSearch;