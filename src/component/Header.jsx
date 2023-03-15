import React from "react";
import "./Header.css";

const Header = ({ money, total }) => {
  return (
    <div className="header">
      {(total > 0 && <>Harcamak için ${money - total} paranız kaldı.</>) || (
        <>
          Harcamak için <span>${money}</span> paranız var.{" "}
        </>
      )}
    </div>
  );
};

export default Header;
