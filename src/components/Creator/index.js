import React from "react";
import { useDispatch } from "react-redux";
import { UserProfileListComponent } from "../../components";
import { fetchUser } from "../../store/User/UserCreators";

const CreatorComponent = () => {
  const creatorUsername = "felipetofoli";
  const dispatch = useDispatch();

  dispatch(fetchUser(creatorUsername));

  return (
    <>
      Created with &#10084;&#65039; by:
      <UserProfileListComponent />
    </>
  );
};

export default CreatorComponent;
