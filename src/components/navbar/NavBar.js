import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    list-style: none;
  }

`
const StyledLink = styled(Link)`
  color: antiquewhite;
  text-decoration: none;    
    
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: antiquewhite;
  }
`

const NavBar = () => {
  return (
    <div>
      <Nav>
        <ul className="nav-links">
          <StyledLink to='/music' >
            <li>Music</li>
          </StyledLink>
          <StyledLink to='/videos'>
            <li>Videos</li>
          </StyledLink>
          <StyledLink to='/live'>
            <li>Live</li>
          </StyledLink>
          <StyledLink to='/store'>
            <li>Store</li>
          </StyledLink>
          <StyledLink to='/contact'>
            <li>Contact</li>
          </StyledLink>
        </ul>
      </Nav>
    </div>
  )
}

export default NavBar
