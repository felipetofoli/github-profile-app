import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  ButtonComponent,
  UserProfileListComponent,
  InputFieldComponent,
  HeaderComponent,
} from "./components";
import * as ServiceConfig from "./services/ServiceConfig";
import { changeUser, resetUser } from "./store/userAction";

function Github() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

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
          //setUser(responseUser);
          dispatch(changeUser(responseUser));
        })
        .catch((err) => {
          // todo: improve error handling
          dispatch(resetUser());
          if (err.response.status === 404) alert("Username not found");
          else alert("error");
        });
    } else {
      dispatch(resetUser());
      alert("Please fill the username field");
    }
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <HeaderComponent />

      <hr />

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

      <UserProfileListComponent />
    </>
  );
}

export default Github;
