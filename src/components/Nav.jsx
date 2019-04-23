import React from "react";
import { Link } from "@reach/router";

function Nav({ topics }) {
  console.log(topics, "<<< topics");
  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      {topics.map(topic => (
        <Link to={`/${topic.slug}`} key={topic.slug}>
          {topic.slug}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
