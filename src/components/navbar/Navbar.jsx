import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {

const [open,setOpen] = useState(false)

  return (
    <nav>
        <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Oello Realtors</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        </div>
        <div className="right">
        <a href="/login">Sign in</a>
        <a href="/register" className="reg">Sign up</a>

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/login">Sign in</a>
          <a href="/register">Sign up</a>
        </div>

        </div>
    </nav>
  );
}

export default Navbar;
