import { useState } from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router";
import { getUsername, signOut } from "../utils/auth";

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useLocation(); // agar navbar dicek ulang setiap pindah halaman
  const username = getUsername();

  function handleSignOut() {
    signOut();
    setOpen(false);
  }

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="#home">Learn With Rama</a>
        </div>

        <button
          className={open ? "hamburger active" : "hamburger"}
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={open ? "menu open" : "menu"}>
          <ul>
            <li>
              <a href="/#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="/#courses" onClick={closeMenu}>
                Courses
              </a>
            </li>
            <li>
              <a href="/#tutors" onClick={closeMenu}>
                Tutors
              </a>
            </li>
            <li>
              <a href="/#partners" onClick={closeMenu}>
                Partners
              </a>
            </li>
            <li>
              <a href="/#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
            {username ? (
              <>
                <li>
                  <Link to="/dashboard" onClick={closeMenu}>
                    Hi, {username}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signin"
                    className="tbl-biru"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/signup" className="tbl-biru" onClick={closeMenu}>
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
