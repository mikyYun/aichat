import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
import ClearAllIcon from '@mui/icons-material/ClearAll';
const Header = ({ avatar, switchAvatar, messages, clearMessage }) => {
  
  // const [searchBox, setSearchBox] = React.useState(false)
  // const [keyword, setKeyword] = React.useState("");
  // const showSearchBox = () => {
  //   setSearchBox(true);
  // }

  // const doSearch = () => {
  //   const history = messages;

  //   console.log("HIS", history)


  //   setKeyword("");
  // }

  // const isEnter = (e) => {
  //   const enter = e.keyCode === 13
  //   if (!enter) return;
  //   doSearch();
  // }

  // const updateKeyword = (e) => {
  //   const word = e.target.value;
  //   if (!word) return;
  //   setKeyword(word);
  // }

  return (
    <div className="header">
      <div className="controller">
        {/* {searchBox && <input type="text" className="search_input" placeholder="search by keyword" onChange={updateKeyword} onKeyDown={isEnter}/>}
        <button className="search" onClick={searchBox ? doSearch : showSearchBox}>
          <SearchIcon fontSize="large" />
        </button> */}
        <button className="clear" onClick={clearMessage}>
          <span>clear</span>
          <ClearAllIcon fontSize="large"/>
        </button>
      </div>
      <div className="avatar_container">
        <span className={`avatar avatar${avatar}`}>
        </span>
        <button onClick={switchAvatar} className="button_switch">
          Switch AI
        </button>
      </div>
    </div>
  );
};

export default Header;
