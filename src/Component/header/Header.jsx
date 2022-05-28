import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.str}</h1>
      <h2>Todo-List</h2>
    </div>
  );
};

export default Header;
