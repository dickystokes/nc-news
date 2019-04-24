import React from "react";
import { Link } from "@reach/router";
import Auth from "./Auth";

function Nav({ topics }) {
  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      {topics.map(topic => (
        <Link to={`/topics/${topic.slug}`} key={topic.slug}>
          {topic.slug}
        </Link>
      ))}
      <Auth />
    </nav>
  );
}

export default Nav;
