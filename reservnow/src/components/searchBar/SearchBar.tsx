import React from "react";
import "./styles.css";
import { IoIosSearch } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="searchBarRoot">
      <div className="searchBarContainer">
        <IoSearchOutline fontSize={20} />
        <input type="text" placeholder="Search reviews"/>
      </div>
    </div>
  );
}

export default SearchBar;
