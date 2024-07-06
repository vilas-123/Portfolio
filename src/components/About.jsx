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
                        <TextSectionHeading id="about"> About Me</TextSectionHeading>

                        <TextSectionPara>Hello! My journey began as a high school student with a keen interest in Mathematics. I was introduced to programming during my freshman year at the  <Link to="https://iitjammu.ac.in/" style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }} > Indian Institute of Technology, Jammu</Link>. My passion for coding ignited in 2020, during my first year of B.Tech. Since then, I have immersed myself in learning various programming languages and honing my skills in solving complex problems using data structures and algorithms. Above all, I pride myself, being a dedicated <Link to="https://leetcode.com/u/sahujayant046/" style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }}> Problem Solver. </Link>
                        </TextSectionPara>



                        <TextSectionPara> I've pursued my Bachelors in Electrical Engineering (2020-2024) with
                            <Link to="https://drive.google.com/file/d/1S9H4Wm1N2EV4kFDEiFBStSR2mbPetx9c/view?usp=drive_link" style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }} >  8.41 CGPA aggregate</Link>.
                        </TextSectionPara>

                        <TextSectionPara>Also I've knowledge of Machine Learning and Web Development created some projects on that using HTML, CSS, Javascript / React.js / Node.js, MongoDB and some other cool libraries and frameworks. </TextSectionPara>

                        <TextSectionPara id="skills">Here is a list of the technologies that I've worked with.</TextSectionPara>

                        <Technologies>
                            <TechnologiesList>C || C++</TechnologiesList>
                            <TechnologiesList>Python</TechnologiesList>
                            <TechnologiesList>SQL</TechnologiesList>
                            <TechnologiesList>JavaScript</TechnologiesList>
                            <TechnologiesList>ReactJS || NodeJS || ExpressJS</TechnologiesList>
                            <TechnologiesList>Algorithms</TechnologiesList>
                            <TechnologiesList>Bootstrap</TechnologiesList>
                            <TechnologiesList>Material UI</TechnologiesList>
                            <TechnologiesList>MongoDB</TechnologiesList>
                            <TechnologiesList>Data Structures</TechnologiesList>
                            <TechnologiesList>Git || Github</TechnologiesList>
                            <TechnologiesList>Linux</TechnologiesList>
                            <TechnologiesList>OOPs</TechnologiesList>
                            <TechnologiesList>DBMS</TechnologiesList>
                            <TechnologiesList>OS</TechnologiesList>
                            <TechnologiesList>ML Libraries</TechnologiesList>
                        </Technologies>
                    </TextSection>

                    <ImageSection>
                        <img src={require("../Profile2.jpeg")} alt="Profile" style={{ maxWidth: "100%", borderRadius: "10px", border: "1px solid #6c63ff" }} />
                    </ImageSection>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default About
