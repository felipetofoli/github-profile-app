import React from "react";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const { username } = useSelector((state) => state.user);

  return (
    <>
      <span>HEADER: </span>
      {username ? (<span>You are viewing {username} data.</span>) : (<span>Please, search a github profile</span>)}
    </>
  );
};

export default HeaderComponent;
