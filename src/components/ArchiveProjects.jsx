import React from "react";
import { styled } from "styled-components";
import Navbar2 from "./Navbar2";

const Wrapper = styled.div`
  padding: 5% 10%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 5% 5%;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Content = styled.div`
  justify-content: space-between;
  align-items: flex-start;
`;

const TextSectionPara = styled.div`
  line-height: 1.6;
  font-size: 1.6rem;
  background-color: #1b263b;
  margin: 2rem 0rem;
  padding: 2rem;
  border: 0.1rem solid gray;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin: 1rem 0;
    padding: 1.5rem;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  padding-bottom: 9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 4rem;
  }
`;

const ProjectImage = styled.div`
  flex: 1;
  max-width: 50%;
  position: relative;
  transition: all 0.5s ease;
  opacity: 0.9;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 50rem;
    height: 30rem;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    opacity: 1;

    @media (max-width: 768px) {
      transform: scale(1.05);
    }
  }
`;

const Emphasize = styled.div`
  color: rgb(100, 255, 218);
  font-size: 4rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const ProjectDetails = styled.div`
  flex: 1;
  line-height: 1.5;
  max-width: 50%;
  padding: 2rem;
  position: relative;
  border-radius: 0 1rem 1rem 0;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
    text-align: left !important;

    h2 {
      font-size: 1.8rem !important;
    }
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-right: 0rem;
  align-items: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const TechnologiesList = styled.div`
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: rgb(100, 255, 218);
  background-color: #1b263b;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-right: 1rem;
    margin-bottom: 0.8rem;
  }
`;

const ProjectLink = styled.a`
  width: 100%;
  display: block;
  
  img {
    width: 100%;
    height: auto;
    max-width: 50rem;
    max-height: 30rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;
const ArchiveProjects = () => {
  return (
    <>
      <Navbar2 />
      <Wrapper>
        <Emphasize> Other Noteworthy Projects</Emphasize>
        <Container>
          <Content>
            <ProjectCard>
              <ProjectImage>
                <a href="https://github.com/vilas-123/Rag-Application-Chatbot-"
                      target="_blank" 
                      rel="noopener noreferrer">
                  {" "}
                  <img
                    src={require("../images/autobot.png")}
                    alt="Autobot Code Screenshot"
                    style={{ height: "30rem", width: "50rem" }}
                  />{" "}
                </a>
              </ProjectImage>
              <ProjectDetails style={{ textAlign: "right" }}>
                <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                  RAG Chatbot
                </h2>
                <TextSectionPara>
                  Developed NLP-powered chatbots using
                  LangChain, increasing conversational accuracy by 20 percent.
                  Additionally, I integrated Pinecone for vector search,
                  enhancing retrieval speed by 40 percent for real-time queries.
                </TextSectionPara>
                <Technologies>
                  <TechnologiesList>Machine Learning</TechnologiesList>
                  <TechnologiesList>GEN AI</TechnologiesList>
                  <TechnologiesList>Vector DB</TechnologiesList>
                  <TechnologiesList>LLMS</TechnologiesList>
                  <TechnologiesList>Keras</TechnologiesList>
                  <TechnologiesList>Tensorflow</TechnologiesList>
                </Technologies>
              </ProjectDetails>
            </ProjectCard>

          

            <ProjectCard>
              <ProjectImage>
                <a href="https://github.com/jayant0146/Portfolio-2.0"
                      target="_blank" 
                      rel="noopener noreferrer">
                  {" "}
                  <img
                    src={require("../images/Portfolio.png")}
                    alt="Portfolio  Screenshot"
                    style={{ height: "30rem", width: "50rem" }}
                  />{" "}
                </a>
              </ProjectImage>
              <ProjectDetails style={{ textAlign: "right" }}>
                <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                  Portfolio
                </h2>
                <TextSectionPara>
                  {" "}
                  Designed and implemented innovative strategies to showcase
                  educational background, qualifications, professional
                  experiences, and abilities through a digital portfolio
                  Utilized ReactJS, HTML, and CSS skills to gather and organize
                  portfolio information Crafted engaging and professional
                  portfolio content to highlight key accomplishments and skills
                  effectively
                </TextSectionPara>
                <Technologies>
                  <TechnologiesList>HTML || CSS</TechnologiesList>
                  <TechnologiesList>ReactJS</TechnologiesList>
                  <TechnologiesList>Styled Components</TechnologiesList>
                  <TechnologiesList>Responsive</TechnologiesList>
                </Technologies>
              </ProjectDetails>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage>
                <a href="https://github.com/vilas-123/Online-Quiz-React"
                      target="_blank" 
                      rel="noopener noreferrer">
                  {" "}
                  <img
                    src={require("../images/quiz.png")}
                    alt="Quiz App  Screenshot"
                    style={{ height: "30rem", width: "50rem" }}
                  />{" "}
                </a>
              </ProjectImage>
              <ProjectDetails style={{ textAlign: "right" }}>
                <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                  Quiz App
                </h2>
                <TextSectionPara>
                  {" "}
                  This is the Intuitive Quiz Hub using React. After entering the
                  details, one can enter into the quiz questions. Questions
                  along with four options will be displayed on the screen, and
                  then clicking on the option we can view our score. After
                  finishing the quiz, total score will be displayed
                </TextSectionPara>
                <Technologies>
                  <TechnologiesList>HTML</TechnologiesList>
                  <TechnologiesList>ReactJS</TechnologiesList>
                  <TechnologiesList>CSS</TechnologiesList>
                </Technologies>
              </ProjectDetails>
            </ProjectCard>

            <ProjectCard>
              <ProjectImage>
                <a href="https://github.com/vilas-123/Resume-Templates"
                      target="_blank" 
                      rel="noopener noreferrer">
                  {" "}
                  <img
                    src={require("../images/resume.png")}
                    alt="Resume Template Screenshot"
                    style={{ height: "30rem", width: "50rem" }}
                  />{" "}
                </a>
              </ProjectImage>
              <ProjectDetails style={{ textAlign: "right" }}>
                <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                  Resume Templates
                </h2>
                <TextSectionPara>
                  {" "}
                  Resume templates are designed to enhance readability and
                  overall presentation, ensuring the beat resume stands out.
                  With 7-8 different templates available, one can easily switch
                  between styles to find the one that best suits own needs.
                  These templates are crafted to facilitate a smooth and
                  efficient resume creation process, helping everyone to present
                  the qualifications and experiences in the most compelling way.
                </TextSectionPara>
                <Technologies>
                  <TechnologiesList>HTML || CSS</TechnologiesList>
                  <TechnologiesList>ReactJS</TechnologiesList>
                  <TechnologiesList>Styled Components</TechnologiesList>
                  <TechnologiesList>Material UI</TechnologiesList>
                </Technologies>
              </ProjectDetails>
            </ProjectCard>

            <ProjectCard>
            <ProjectImage>
    <a 
      href="https://to-do-app-ten-lake.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img
        src={require("../images/todoapp.png")}
        alt="To Do App Screenshot"
        style={{ height: "30rem", width: "50rem" }}
      />
    </a>
  </ProjectImage>
              <ProjectDetails style={{ textAlign: "right" }}>
                <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                  To Do App
                </h2>
                <TextSectionPara>
                  {" "}
                  To-do apps enable efficient task management by allowing to
                  track, prioritize, and focus on critical tasks, thereby
                  boosting productivity and efficiency. Having all the tasks
                  centralized in one place enhances organization and ensures no
                  task is missed. Additionally, this to-do app is highly
                  responsive, automatically adjusting to fit longer entries
                  within the designated space. Users can effortlessly add or
                  remove items from their list, streamlining the task management
                  process.
                </TextSectionPara>
                <Technologies>
                  <TechnologiesList>HTML || CSS</TechnologiesList>
                  <TechnologiesList>ReactJS</TechnologiesList>
                  <TechnologiesList>Responsive</TechnologiesList>
                </Technologies>
              </ProjectDetails>
            </ProjectCard>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

export default ArchiveProjects;
