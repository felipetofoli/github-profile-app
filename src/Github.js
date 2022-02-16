import React, { useState } from "react";
import axios from "axios";

function Github() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});

  const api = axios.create({
    baseURL: "https://api.github.com/users/",
  });

  const handleClick = (event) => {
    event.preventDefault();

    if (username) {
      api
        .get(username)
        .then((response) => {
          const responseUser = {
            username: response.data.login,
            name: response.data.name,
            avatar: response.data.avatar_url,
            publicReposQuantity: response.data.public_repos,
          };
          setUser(responseUser);
        })
        .catch((err) => {
          setUser({});
          if (err.response.status === 404) alert("Username not found");
          else alert("error");
        });
    } else {
      setUser({});
      alert("Please fill the username field");
    }
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <h1>Github Profile</h1>
      <form>
        <input
          type="text"
          placeholder="Type the user name"
          value={username}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </form>

      <div
        style={{ display: Object.keys(user).length === 0 ? "none" : "block" }}
      >
        <h2>{user.username}</h2>
        <img src={user.avatar} alt={user.name} />
        <p>Name: {user.name}</p>
        <p>Public repos: {user.publicReposQuantity}</p>
      </div>
    </>
  );
}

export default Github;
