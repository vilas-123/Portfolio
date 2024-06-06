import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 5% 10%;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const TextSection = styled.div`
    max-width: 60%;
`

const TextSectionHeading = styled.div`
    font-size: 30px;
    color: aliceblue;
    font-weight: bold;
    padding-bottom: 40px;
`

const TextSectionPara = styled.div`
    line-height: 1.6;
    font-size: 18px;
    color: rgb(136, 146, 176);
    margin-bottom: 20px;
`

const Technologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
`

const TechnologiesList = styled.div`
    margin-right: 15px;
    margin-bottom: 10px;
    font-size: 15px;
    color: rgb(100, 255, 218);
    background-color: #1b263b;
    padding: 5px 10px;
    border-radius: 5px;
`
const ImageSection = styled.div`
    max-width: 35%;
    text-align: center;
    position: relative;
`

const About = () => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextSection>
                        <TextSectionHeading> About Me</TextSectionHeading>

                        <TextSectionPara>Hello! Interestingly, I have been a student of Maths in my high school and got introduced to programming in my freshman year at
                            <Link to="https://iitjammu.ac.in/" style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }} > Indian Institute of Technology, Jammu </Link>.
                            My interest in coding started back in 2020 during the first year of B.tech. Since then, I started learning programming languages & solving problems based on data structure and algorithms. Most importantly I'm a
                            <Link to="https://leetcode.com/u/sahujayant046/" style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }}>  Problem Solver</Link>.
                        </TextSectionPara>

                        <TextSectionPara> I've pursued my Bachelors in Electrical Engineering (2020-2024) with
                            <Link to="https://www.linkedin.com/in/jayant-sahu-48a426200/" style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }} >  8.41 CGPA aggregate</Link>.
                        </TextSectionPara>

                        <TextSectionPara>Also I've knowledge of Web Development and created some projects on that using HTML, CSS, Javascript / React.js / Node.js, MongoDB and some other cool libraries and frameworks. </TextSectionPara>

                        <TextSectionPara>Here is a list of the technologies that I've worked with.</TextSectionPara>

                        <Technologies>
                            <TechnologiesList>C || C++</TechnologiesList>
                            <TechnologiesList>Algorithms</TechnologiesList>
                            <TechnologiesList>Bootstrap</TechnologiesList>
                            <TechnologiesList>ReactJS || NodeJS || ExpressJS</TechnologiesList>
                            <TechnologiesList>MongoDB || Heroku</TechnologiesList>
                            <TechnologiesList>Data Structures</TechnologiesList>
                            <TechnologiesList>HTML || CSS</TechnologiesList>
                            <TechnologiesList>Javascript || JQuery</TechnologiesList>
                            <TechnologiesList>Git || Github</TechnologiesList>
                            <TechnologiesList>Firebase</TechnologiesList>
                        </Technologies>
                    </TextSection>

                    <ImageSection>
                        <img src="/Profile2.jpeg" alt="Profile" style={{ maxWidth: "100%", borderRadius: "10px", border: "1px solid #6c63ff" }} />
                    </ImageSection>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default About
