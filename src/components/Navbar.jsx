import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.nav`
  min-height: 6rem;
  position: relative;
  z-index: 100;
`;

const Wrapper = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    position: absolute;
    top: 6rem;
    right: 0;
    width: 100%;
    background-color: #0a192f;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    display: ${(props) => (props.open ? "flex" : "none")};
  }
`;

const MenuLink = styled.a`
  color: whiteSmoke;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 2rem;
  padding: 0.5rem;
  text-decoration: none;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const LinkedInLink = styled(MenuLink)`
  border: 0.1rem solid rgb(100, 255, 218);
  color: rgb(100, 255, 218);
`;

const Hamburger = styled.button`
  display: none;
  border: 0;
  background: transparent;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  span {
    width: 2.5rem;
    height: 0.3rem;
    background-color: white;
    margin: 0.3rem 0;
  }
`;

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Awards", "#achievements"],
  ["Contact", "#contact"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <Container>
      <Wrapper>
        <Logo href="#top" onClick={closeMenu}>
          PORTFOLIO
        </Logo>
        <Hamburger
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <Right open={open}>
          {links.map(([label, href]) => (
            <MenuLink key={href} href={href} onClick={closeMenu}>
              {label}
            </MenuLink>
          ))}
          <LinkedInLink
            href="https://www.linkedin.com/in/vilas-harapanahalli-96b231244/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            LinkedIn
          </LinkedInLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
