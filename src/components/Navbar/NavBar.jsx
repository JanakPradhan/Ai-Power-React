import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {

  const navItems = ["Home", "About", "Tech", "Blog"]

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>

                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
