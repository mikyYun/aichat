import React from "react";

const List = ({avatar}) => {
  const [selectedAvatar, setSelectedAvatar] = React.useState(1);

  React.useEffect(() => {
    setSelectedAvatar(avatar)
  }, [avatar])

  const select = (e) => {
    const val = Number(e.target.getAttribute("value"))
    if (!val) return;
    setSelectedAvatar(val);
  }

  const selectedClassName = (index) => {
    return selectedAvatar === index + 1 ? "avatar_container selected" : "avatar_container";
  }


  const drawAvatars = () => {
    let avatarLists = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return avatarLists.map((avatar, index) => {
      return (
        <div className={selectedClassName(index)} key={index} >
          <img
            src={`./src/resources/avatars/${avatar}.jpg`}
            alt="avatar"
            className="avatar"
            value={avatar}
            onClick={select}
          />
        </div>
      );
    });
  };

  return (
    <div className="list">
      {drawAvatars()}
    </div>
  );
};

export default List;
