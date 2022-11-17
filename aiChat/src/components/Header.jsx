import React from "react";
import getImageNumber from "../helpers/getImage";

const Header = () => {
  const avatar = getImageNumber();

  return (
    <div className="header">
      <div className="avatar_container">
        <img
          src={`./src/resources/avatars/${avatar}.jpg`}
          alt="avatar"
          className="avatar"
        />
      </div>
      My AI Friend
    </div>
  );
};

export default Header;
