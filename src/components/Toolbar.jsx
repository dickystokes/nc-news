import React from "react";

function Toolbar(props) {
  return (
    <div className="toolbar">
      <h4>Toolbar</h4>
      <p>View by</p>
      <input
        type="radio"
        id="list"
        name="view-by"
        value="list"
        checked="checked"
      />
      <label htmlFor="list">List</label> <br />
      <input type="radio" id="grid" name="view-by" value="grid" />
      <label htmlFor="grid">Grid</label>
      <p>Sort By</p>
      <input
        type="radio"
        id="newest"
        name="sort-by"
        value="newest"
        checked="checked"
      />
      <label htmlFor="newest">Newest First</label>
      <br />
      <input type="radio" id="most-liked" name="sort-by" value="most-liked" />
      <label htmlFor="most-liked">Most Liked</label> <br />
      <input
        type="radio"
        id="most-comments"
        name="sort-by"
        value="most-comments"
      />
      <label htmlFor="most-comments">Most Talked About</label> <br />
      <p>Add Article</p>
      <p>Delete Article </p>
      <img
        src={require("./images/toolbar_ad.jpg")}
        alt="oxo_advert"
        className="advert-image"
        onClick={e => {
          window.confirm(
            "Where do you expect this to take you? This internet is not invented yet!"
          );
        }}
      />
      <img
        src={require("./images/toolbar_ad2.jpg")}
        alt="oxo_advert"
        className="advert-image"
        onClick={e => {
          window.confirm(
            "Where do you expect this to take you? This internet is not invented yet!"
          );
        }}
      />
    </div>
  );
}

export default Toolbar;
