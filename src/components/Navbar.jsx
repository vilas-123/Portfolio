import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  height: 6rem;
`;

const Wrapper = styled.div`
  padding: 3rem 3rem;
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
  border: 0.05rem solid rgb(100, 255, 218);
  font-size: 1.7rem;
  color: rgb(100, 255, 218);
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
  padding: .5rem;
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
  font-size: 1.6rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  padding: .5rem;
  margin-left: 2.5rem;
`;



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
          <a href='https://drive.google.com/file/d/1-lrShvjuim6KljPjaznd5od5mbcwysJS/view?usp=sharing' style={{ textDecoration: "none", color: "whiteSmoke" }}><SearchContainer> RESUME</SearchContainer></a>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar