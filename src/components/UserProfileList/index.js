import React from "react";
import { useSelector } from "react-redux";
import { Title } from "./index.css";

const UserProfileListComponent = ({ userData }) => {
  //const { username, avatar, name, publicReposQuantity } = userData;
  const usernameRedux = useSelector((state) => state.user.username);
  return (
    <>
      {usernameRedux && (
        <div>
          <Title>{usernameRedux}</Title>
          {/*<img src={avatar} alt={name} />
          <p>Name: {name}</p>
      <p>Public repos: {publicReposQuantity}</p>*/}
        </div>
      )}
    </>
  );
};

export default UserProfileListComponent;
