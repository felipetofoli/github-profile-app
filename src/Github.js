import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  ButtonComponent,
  UserProfileListComponent,
  InputFieldComponent,
  HeaderComponent,
  FooterComponent,
} from "./components";
import { fetchUser, resetUser } from "./store/User/UserCreators";

function Github() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();

    if (username) {
      dispatch(fetchUser(username));
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

      <hr />

      <FooterComponent />
    </>
  );
}

export default Github;
