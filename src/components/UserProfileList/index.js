import React from "react";
import { Title } from "./index.css";

const UserProfileListComponent = ({ userData }) => {
  const { username, avatar, name, publicReposQuantity } = userData;
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
