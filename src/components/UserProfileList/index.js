import React from "react";

const UserProfileListComponent = ({ userData }) => {
  const { username, avatar, name, publicReposQuantity } = userData;
  return (
    <>
      {username && (
        <div>
          <h2>{username}</h2>
          <img src={avatar} alt={name} />
          <p>Name: {name}</p>
          <p>Public repos: {publicReposQuantity}</p>
        </div>
      )}
    </>
  );
};

export default UserProfileListComponent;
