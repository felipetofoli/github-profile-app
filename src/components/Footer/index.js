import React from "react";

const FooterComponent = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
      <span>FOOTER: </span>
      <a href="/profile/felipetofoli">Creator</a> | {currentYear}
    </>
  );
};

export default FooterComponent;