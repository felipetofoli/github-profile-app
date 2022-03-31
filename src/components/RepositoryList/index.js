import React from "react";
import { useParams } from "react-router-dom";

const RepositoryListComponent = () => {
  const params = useParams();

  return (
    <>
      <h2>{params.username}'s repositories:</h2>
      <ul>
        <li>Repo 1</li>
        <li>Repo 2</li>
        <li>Repo N</li>
      </ul>
    </>
  );
};

export default RepositoryListComponent;
