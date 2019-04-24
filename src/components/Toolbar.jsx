import React from "react";

function Toolbar(props) {
  return (
    <div className="toolbar">
      Toolbar
      <p>Sort By</p>
      <input type="radio" id="newest" name="drone" value="newest" />
      <label for="newest">Newest First</label>
      <br />
      <input type="radio" id="most-liked" name="drone" value="most-liked" />
      <label for="most-liked">Most Liked</label> <br />
      <input
        type="radio"
        id="most-comments"
        name="drone"
        value="most-comments"
      />
      <label for="most-comments">Most Talked About</label> <br />
      <p>Add Article</p>
      <p>Delete Article </p>
      <p>other stuff... </p>
    </div>
  );
}

export default Toolbar;