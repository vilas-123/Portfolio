import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 5% 10%;
  align-items: center;
  justify-content: space-between;
`;

const Texting = styled.div`
    font-size: 1.7rem;
    color: rgb(136, 146, 176);
    padding-right: 50%;
    padding-bottom: 1rem;
`

const Emphasize = styled.div`
    color: rgb(204, 214, 246);
    font-size: 7rem;
    font-weight: bold;
`

const SearchWrap = styled.div`
    padding-right: 85%;
    text-align: center;
`

const SearchContainer = styled.div`
  border: 0.05rem solid rgb(100, 255, 218);
  font-size: 1.7rem;
  color: rgb(100, 255, 218);
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  cursor: pointer;
`;

const Home = () => {
    return (
        <Wrapper>
            <Texting style={{ color: "rgb(100, 255, 218)" }}>Hello World! I am <br /></Texting>
            <Emphasize style={{ color: "aliceblue" }}>Vilas Harapanahalli</Emphasize>
            <Emphasize>  Enthusiastic Coder & Solution Seeker</Emphasize> <br /><br /><br />
            <Texting>As an software engineer at Beehyv Software Solutions, I am eager to advance my skills and thrive in an environment surrounded by talented professionals. <br /><br /></Texting>
            <Texting>I'm always available for engaging discussions on <Link to="https://www.linkedin.com/in/vilas-harapanahalli-96b231244/" style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }}>@Linkedin </Link> </Texting><br /><br />

            <SearchWrap>
                <a href="mailto:vilasharapanahalli@gmail.com" style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }}><SearchContainer> Hire Me! </SearchContainer></a>
            </SearchWrap>
        </Wrapper>

    )
}

export default Home
