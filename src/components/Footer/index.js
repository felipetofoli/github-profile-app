import React from "react";

const FooterComponent = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
      <span>FOOTER: </span>
      <a href="/creator">Creator</a> | {currentYear}
    </>
  );
};

export default FooterComponent;