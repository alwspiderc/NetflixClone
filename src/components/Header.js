import React from "react";
import "./Header.css";

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" />
        </a>
      </div>

      <div className="header--user">
        <a href="/">
          <img src="https://pics.prcm.jp/351f3768421e2/80245782/png/80245782.png" />
        </a>
      </div>
    </header>
  );
};
