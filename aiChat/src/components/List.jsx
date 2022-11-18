import React from "react";

const List = ({ avatar, selectAvatar }) => {
  const selectedClassName = (index) => {
    return avatar === index + 1
      ? "avatar_container selected"
      : "avatar_container";
  };

  const drawAvatars = () => {
    let avatarLists = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return avatarLists.map((avatar, index) => {
      return (
        <div className={selectedClassName(index)} key={index}>
          <img
            src={`./src/resources/avatars/${avatar}.jpg`}
            alt="avatar"
            className="avatar"
            value={avatar}
            onClick={selectAvatar}
          />
        </div>
      );
    });
  };

  return (
    <div className="list_container">
      <div className="list">{drawAvatars()}</div>
    </div>
  );
};

export default List;
