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
          <p>
            <a href={`/github-profile-app/${username}/repositories`}>See repositories</a>
          </p>
        </div>
      )}
    </>
  );
};

export default UserProfileListComponent;
