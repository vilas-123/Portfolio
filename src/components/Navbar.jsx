import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid rgb(100, 255, 218);
  font-size: 17px;
  color: rgb(100, 255, 218);
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  padding: 5px;
  margin-left: 25px;
`;

const Dropdown = styled.a`
  position: relative;
  display: inline-block;
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
  `


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo> PORTFOLIO</Logo>
        </Left>
        <Right>
          <a href='#about' style={{ textDecoration: "none", color: "whiteSmoke" }}><MenuItem> ABOUT </MenuItem></a>
          <a href='#skills' style={{ textDecoration: "none", color: "whiteSmoke" }}><MenuItem> SKILLS </MenuItem></a>
          <a href='#projects' style={{ textDecoration: "none", color: "whiteSmoke" }}><MenuItem> PROJECTS </MenuItem></a>
          <a href='#contact' style={{ textDecoration: "none", color: "whiteSmoke" }}><MenuItem> CONTACT </MenuItem></a>
          <a href='' style={{ textDecoration: "none", color: "whiteSmoke" }}><SearchContainer> RESUME</SearchContainer></a>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar