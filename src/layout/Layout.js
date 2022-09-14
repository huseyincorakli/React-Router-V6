import React from "react";
import { Link, Outlet } from "react-router-dom";


function Layout() {
  return (
    <div>
      <nav className="header">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/user"}>User</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
