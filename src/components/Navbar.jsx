// import React from 'react'
// import { styled } from 'styled-components'

// const Container = styled.div`
//   height: 6rem;
// `;

// const Wrapper = styled.div`
//   padding: 3rem 3rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const SearchContainer = styled.div`
//   border: 0.05rem solid rgb(100, 255, 218);
//   font-size: 1.7rem;
//   color: rgb(100, 255, 218);
//   display: flex;
//   align-items: center;
//   margin-left: 2.5rem;
//   padding: .5rem;
// `;


// const Logo = styled.h1`
//   font-weight: bold;
// `;
// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const MenuItem = styled.div`
//   font-size: 1.6rem;
//   cursor: pointer;
//   text-decoration: none;
//   font-weight: bold;
//   padding: .5rem;
//   margin-left: 2.5rem;
// `;



// const Navbar = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Left>
//           <Logo> PORTFOLIO</Logo>
//         </Left>
//         <Right>
//           <a href='#about' style={{ textDecoration: "none", color: "whiteSmoke" }}><MenuItem> ABOUT </MenuItem></a>
//           <a href='#skills' style={{ textDecoration: "none", color: "whiteSmoke" }}><MenuItem> SKILLS </MenuItem></a>
//           <a href='#projects' style={{ textDecoration: "none", color: "whiteSmoke" }}><MenuItem> PROJECTS </MenuItem></a>
//           <a href='#contact' style={{ textDecoration: "none", color: "whiteSmoke" }}><MenuItem> CONTACT </MenuItem></a>
//           <a href='https://drive.google.com/file/d/1f-evjtGEivqHQowOo_VDi1Ck-DoilnKS/view?usp=sharing' style={{ textDecoration: "none", color: "whiteSmoke" }}><SearchContainer> RESUME</SearchContainer></a>
//         </Right>
//       </Wrapper>
//     </Container>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 6rem;
  position: relative;
  z-index: 100;
`;

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    position: absolute;
    top: 6rem;
    right: 0;
    background-color: #0a192f; /* Adjust to your bg */
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`;

const MenuItem = styled.div`
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: bold;
  padding: 0.5rem;
  margin-left: 2.5rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
    margin-left: 0;
  }
`;

const SearchContainer = styled.div`
  border: 0.05rem solid rgb(100, 255, 218);
  font-size: 1.7rem;
  color: rgb(100, 255, 218);
  display: flex;
  align-items: center;
  padding: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 3px 0;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>PORTFOLIO</Logo>
        </Left>

        <Hamburger onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Hamburger>

        <Right open={open}>
          <a href="#about" style={{ textDecoration: "none", color: "whiteSmoke" }}>
            <MenuItem>ABOUT</MenuItem>
          </a>
          <a href="#skills" style={{ textDecoration: "none", color: "whiteSmoke" }}>
            <MenuItem>SKILLS</MenuItem>
          </a>
          <a href="#projects" style={{ textDecoration: "none", color: "whiteSmoke" }}>
            <MenuItem>PROJECTS</MenuItem>
          </a>
          <a href="#contact" style={{ textDecoration: "none", color: "whiteSmoke" }}>
            <MenuItem>CONTACT</MenuItem>
          </a>
          <a
            href="https://drive.google.com/file/d/1f-evjtGEivqHQowOo_VDi1Ck-DoilnKS/view?usp=sharing"
            style={{ textDecoration: "none", color: "whiteSmoke" }}
          >
            <SearchContainer>RESUME</SearchContainer>
          </a>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
