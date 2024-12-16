import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 5% 10%;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TextSection = styled.div`
  max-width: 60%;
`;

const TextSectionHeading = styled.div`
  font-size: 3rem;
  color: aliceblue;
  font-weight: bold;
  padding-bottom: 4rem;
`;

const TextSectionPara = styled.div`
  line-height: 1.6;
  font-size: 1.8rem;
  color: rgb(136, 146, 176);
  margin-bottom: 2rem;
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
`;

const TechnologiesList = styled.div`
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: rgb(100, 255, 218);
  background-color: #1b263b;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;
const ImageSection = styled.div`
  max-width: 35%;
  text-align: center;
  position: relative;
  transition: all 0.5s ease;
  opacity: 0.9;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    opacity: 1;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <TextSection>
            <TextSectionHeading id="about"> About Me</TextSectionHeading>

            <TextSectionPara>
              Hello! My journey began as a high school student with a keen
              interest in Mathematics. I was introduced to programming during my
              freshman year at the{" "}
              <Link
                to="https://vtu.ac.in/en/"
                style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }}
                target="_blank"
              >
                {" "}
                Visvesvaraya Technological University{" "}
              </Link>
              . My passion for coding ignited in 2020, during my first year of
              B.Tech. Since then, I have immersed myself in learning various
              programming languages and honing my skills in solving complex
              problems using data structures and algorithms. Above all, I pride
              myself, being a dedicated{" "}
             
                {" "}
                Problem Solver.{" "}
              
            </TextSectionPara>

            <TextSectionPara>
              I've pursued my Bachelors in Computer Science Engineering
              (2020-2024) with&nbsp;
              <a
                href="https://drive.google.com/file/d/1m_2LDyGIBJ2V2pKCp-2aouZfhrphxexZ/view?usp=drive_link"
                style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                8.30 CGPA aggregate
              </a>
              .
            </TextSectionPara>

            <TextSectionPara>
              Also, I have knowledge of Machine Learning, including Llama, RAG,
              and Neural Networks, as well as Web Development. I've created
              several projects using HTML, CSS, JavaScript, React.js,
              and other cool libraries and frameworks. Additionally, I
              am proficient in REST Framework, Django, and PineconeDB.
            </TextSectionPara>

            <TextSectionPara id="skills">
              Here is a list of the technologies that I've worked with.
            </TextSectionPara>

            <Technologies>
              <TechnologiesList>Python</TechnologiesList>
              <TechnologiesList>SQL</TechnologiesList>
              <TechnologiesList>JavaScript</TechnologiesList>
              <TechnologiesList>
                ReactJS || Typescript 
              </TechnologiesList>
              <TechnologiesList>Deeplearning</TechnologiesList>
              <TechnologiesList>Bootstrap</TechnologiesList>
              <TechnologiesList>Material UI</TechnologiesList>
              <TechnologiesList>Natural Language Processing(NLP) </TechnologiesList>
              <TechnologiesList>Data Structures</TechnologiesList>
              <TechnologiesList>Git || Github</TechnologiesList>
              <TechnologiesList>AWS</TechnologiesList>
              <TechnologiesList>Jenkins</TechnologiesList>
              <TechnologiesList>DBMS</TechnologiesList>
              <TechnologiesList>Apache Kafka.</TechnologiesList>
              <TechnologiesList>ML Libraries</TechnologiesList>
              <TechnologiesList>Numpy || Pandas || Matplotlib</TechnologiesList>
              <TechnologiesList>Docker</TechnologiesList>
            </Technologies>
          </TextSection>

          <ImageSection>
            <img
              src={require("../images/Profile2.jpeg")}
              alt="Profile"
              style={{
                maxWidth: "100%",
                borderRadius: "1rem",
                border: ".1rem solid #6c63ff",
              }}
            />
          </ImageSection>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default About;
