import React from "react";

const Header = ({avatar, switchAvatar}) => {

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
      <button onClick={switchAvatar} className="button_switch">Switch AI</button>
    </div>
  );
};

export default Header;
