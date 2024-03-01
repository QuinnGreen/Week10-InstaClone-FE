import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faCompass,
  faPhotoFilm,
  faPaperPlane,
  faHeart,
  faSquarePlus,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPaperPlane as faRegularPaperPlane,
  faCircle,
} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { faThreads as faBrandThreads } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Clonestagram</div>
      <div className="nav-links">
        <p>
          {" "}
          <FontAwesomeIcon className="icon" icon={faHouse} size="2x" /> Home
        </p>
        <p>
          <FontAwesomeIcon
            className="icon"
            icon={faMagnifyingGlass}
            size="2x"
          />{" "}
          Search
        </p>
        <p>
          <FontAwesomeIcon className="icon" icon={faCompass} size="2x" />{" "}
          Explore
        </p>
        <p>
          <FontAwesomeIcon className="icon" icon={faPhotoFilm} size="2x" />{" "}
          Reels
        </p>
        <p>
          <FontAwesomeIcon
            className="icon"
            icon={faRegularPaperPlane}
            size="2x"
          />{" "}
          Messages
        </p>
        <p>
          <FontAwesomeIcon className="icon" icon={faHeart} size="2x" />{" "}
          Notifications
        </p>
        <p>
          <FontAwesomeIcon className="icon" icon={faSquarePlus} size="2x" />{" "}
          Create
        </p>
        <p>
          <FontAwesomeIcon icon={faCircle} size="2x" /> Profile
        </p>
        <div className="bottom-selectors">
          <p>
            <FontAwesomeIcon className="icon" icon={faBrandThreads} size="2x" />{" "}
            Threads
          </p>
          <p>
            <FontAwesomeIcon className="icon" icon={faBars} size="2x" /> More
          </p>
        </div>
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
