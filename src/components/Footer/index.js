import React from "react";

const FooterComponent = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
      <span>FOOTER: </span>
      <a href="/github-profile-app/creator">Creator</a> | {currentYear}
    </>
  );
};

export default FooterComponent;