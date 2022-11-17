import React from "react";
import getImageNumber from "../helpers/getImage";

const Header = ({avatar, updateAvatar}) => {
  // const [avatar, setAvatar] = React.useState(1)

  // const updateAvatar = () => {
  //   const newAvatar = getImageNumber();
  //   setAvatar(newAvatar)
  // }

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
      <button onClick={updateAvatar} className="button_switch">Switch AI</button>
    </div>
  );
};

export default Header;
