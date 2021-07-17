import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background-color: black;
  color: antiquewhite;

  .nav-links {
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    list-style: none;
  }

`

const NavBar = () => {
  return (
    <div>
      <Nav>
        <ul className="nav-links">
          <li>Music</li>
          <li>Videos</li>
          <li>Live</li>
          <li>Store</li>
          <li>Contact</li>
        </ul>
      </Nav>
    </div>
  )
}

export default NavBar
