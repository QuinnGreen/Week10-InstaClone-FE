import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Clonestagram</div>
      <div className="nav-links">
        <p>Home</p>
        <p>Search</p>
        <p>Explore</p>
        <p>Reels</p>
        <p>Messages</p>
        <p>Notifications</p>
        <p>Create</p>
        <p>Profile</p>
        <p>Threads</p>
        <p>More</p>
      </div>
    </nav>
  );
};

export default Navbar;

//    <nav className="navbar">
//      <div className="logo">My Logo</div>
//      <ul className="nav-links">
//        <li>
//          <Link to="/home">Home</Link>
//        </li>
//        <li>
//          <Link to="/search">Search</Link>
//        </li>
//        <li>
//          <Link to="/explore">Explore</Link>
//        </li>
//        <li>
//          <Link to="/reels">Reels</Link>
//        </li>
//        <li>
//          <Link to="/messages">Messages</Link>
//        </li>
//        <li>
//          <Link to="/notifications">Notifications</Link>
//        </li>
//        <li>
//          <Link to="/create">Create</Link>
//        </li>
//        <li>
//          <Link to="/profile">Profile</Link>
//        </li>
//        <li>
//          <Link to="/threads">Threads</Link>
//        </li>
//        <li>
//          <Link to="/more">More</Link>
//        </li>
//      </ul>
//    </nav>;
