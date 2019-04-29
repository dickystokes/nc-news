import React from "react";
import { Link } from "@reach/router";

function Nav({ topics }) {
  return (
    <nav className="Nav">
      <Link to="/" className="Nav-section">
        Home
      </Link>
      {topics.map(topic => (
        <Link
          to={`/topics/${topic.slug}`}
          key={topic.slug}
          className="Nav-section"
        >
          {topic.slug}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
