import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 5% 10%;
  align-items: center;
  justify-content: space-between;
`;

const Texting = styled.div`
    font-size: 17px;
    color: rgb(136, 146, 176);
    padding-right: 50%;
    padding-bottom: 10px;
`

const Emphasize = styled.div`
    color: rgb(204, 214, 246);
    font-size: 70px;
    font-weight: bold;
`

const SearchWrap = styled.div`
    padding-right: 88%;
`

const SearchContainer = styled.div`
  border: 0.5px solid rgb(100, 255, 218);
  font-size: 17px;
  color: rgb(100, 255, 218);
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const Home = () => {
    return (
        <Wrapper>
            <Texting style={{ color: "rgb(100, 255, 218)" }}>Hello World! My Name is <br /></Texting>
            <Emphasize style={{ color: "aliceblue" }}>Jayant Sahu</Emphasize>
            <Emphasize>I love to explore & code !!!</Emphasize> <br /><br /><br />
            <Texting>An aspiring software engineer with the ability to grow as an individual and learn in the surrounding of talented people. <br /><br /></Texting>
            <Texting> I am always open for discussions <Link to="https://www.linkedin.com/in/jayant-sahu-48a426200/" style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }}>@Linkedin </Link> </Texting><br /><br />

            <SearchWrap>
                <SearchContainer> <a href="mailto:sahujayant046@gmail.com" style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }}> Hire Me! </a></SearchContainer>
            </SearchWrap>
        </Wrapper>

    )
}

export default Home
