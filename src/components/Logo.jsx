import React from "react";

function Logo(props) {
  return (
    <div className="logo">
      <img
        src={require("./images/fake-news.jpg")}
        alt="news-logo"
        className="news-image"
      />
    </div>
  );
}

export default Logo;
