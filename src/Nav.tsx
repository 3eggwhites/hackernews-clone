import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="row space-between">
        <ul className="row nav">
          <li>Top</li>
          <li>New</li>
        </ul>
        <FaMoon color="#727272" size={24} />
        <FaSun color="rgb(255, 215, 0)" size={24} />
      </nav>
    );
  }
}
