import React from "react"
import { Link } from "gatsby"

export default () =>
  <header>
    <div className="container header__container">
      <nav className="header__menu">
        <ul>
          <li className="nav-link">
            <Link to="/" activeClassName="nav-link--active">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/" activeClassName="nav-link--active">Data Structures</Link>
          </li>
          <li className="nav-link">
            <Link to="/" activeClassName="nav-link--active">Algorithms</Link>
          </li>
        </ul>
      </nav>
      <div className="header__search">
        <input type="text" placeholder="Search..."/>
      </div>
    </div>
  </header>
