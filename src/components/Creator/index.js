import React from "react";
import { useDispatch } from "react-redux";
import { UserProfileListComponent } from "../../components";
import { fetchUser } from "../../store/User/UserCreators";
import { useParams } from "react-router-dom";

const CreatorComponent = () => {
  const dispatch = useDispatch();
  const params = useParams();

  dispatch(fetchUser(params.username));

  return (
    <>
      Created with &#10084;&#65039; by:
      <UserProfileListComponent />
    </>
  );
};

export default CreatorComponent;
