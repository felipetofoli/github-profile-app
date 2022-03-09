import React, { useState } from "react";
import {
  ButtonComponent,
  UserProfileListComponent,
  InputFieldComponent,
} from "./components";
import * as ServiceConfig from "./services/ServiceConfig";

function Github() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});

  const handleClick = (event) => {
    event.preventDefault();

    if (username) {
      ServiceConfig.get({ url: username })
        .then((response) => {
          const responseUser = {
            username: response.login,
            name: response.name,
            avatar: response.avatar_url,
            publicReposQuantity: response.public_repos,
          };
          setUser(responseUser);
        })
        .catch((err) => {
          // todo: improve error handling
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
        <InputFieldComponent
          type="text"
          placeholder="Type the user name"
          value={username}
          handleChange={handleChange}
        />
        <ButtonComponent
          text="Search"
          type="submit"
          handleClick={handleClick}
        />
      </form>

      <UserProfileListComponent userData={user} />
    </>
  );
}

export default Github;
