import React from "react";
import style from "./Navigation.module.css";
const Navigation = () => {
  // console.log(style) 
  return (
    <nav className={`${style.navigation} container`}>
      <div className="logo">
        <img src="/images/first.png" alt=" deepal coding" />
      </div>

      <ul>
        <li>Home </li>
        <li> About </li>
        <li> Contact </li>
      </ul>

    </nav>
  );
};

export default Navigation;
