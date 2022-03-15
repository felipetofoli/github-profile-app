import React from "react";
import { useSelector } from "react-redux";
import { Title } from "./index.css";

const UserProfileListComponent = () => {
  const { username, avatar, name, publicReposQuantity } = useSelector(
    (state) => state.user
  );

  return (
    <>
      {username && (
        <div>
          <Title>{username}</Title>
          <img src={avatar} alt={name} />
          <p>Name: {name}</p>
          <p>Public repos: {publicReposQuantity}</p>
        </div>
      )}
    </>
  );
};

export default UserProfileListComponent;
