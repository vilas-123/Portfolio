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

const Navbar2 = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo> PORTFOLIO</Logo>
                </Left>
                <Right>
                    <a href='/' style={{ textDecoration: "none", color: "whiteSmoke" }}><SearchContainer> BACK TO PORTFOLIO</SearchContainer></a>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar2