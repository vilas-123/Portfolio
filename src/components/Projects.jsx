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
  justify-content: space-between;
  align-items: flex-start;
`;

const TextSectionHeading = styled.div`
  font-size: 3rem;
  color: aliceblue;
  font-weight: bold;
  padding-bottom: 4rem;
`;

const TextSectionPara = styled.div`
  line-height: 1.6;
  font-size: 1.6rem;
  background-color: #1b263b;
  margin: 2rem 0rem;
  padding: 2rem;
  border: 0.1rem solid gray;
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
`;

const ProjectImage = styled.div`
  flex: 1;
  max-width: 50%;
  position: relative;
  transition: all 0.5s ease;
  opacity: 0.9;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    opacity: 1;
  }
`;

const ProjectDetails = styled.div`
  flex: 1;
  line-height: 1.5;
  max-width: 50%;
  padding: 2rem;
  position: relative;
  border-radius: 0 1rem 1rem 0;
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-right: 0rem;
  align-items: flex-end;
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

const Projects = () => {
  return (
    <Wrapper>
      <Container>
        <Content id="projects">
          <TextSectionHeading>
            Selected Projects and Showcases{" "}
          </TextSectionHeading>
          <br />
          <ProjectCard>
            <ProjectImage>
              <a href="https://github.com/vilas-123/Amazon"
              target="_blank"
              rel="noopener noreferrer">
              
                {" "}
                <img
                  src={require("../images/Shopping.png")}
                  alt="Shopping Mart Full Stack Website Screenshot"
                  style={{ height: "30rem", width: "50rem" }}
                />{" "}
              </a>
            </ProjectImage>
            <ProjectDetails style={{ textAlign: "right" }}>
              <h3
                style={{
                  color: "rgb(100, 255, 218)",
                  fontSize: "1.6rem",
                  fontWeight: "lighter",
                }}
              >
                Featured Project
              </h3>
              <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                Shopping Mart Full Stack Website
              </h2>
              <TextSectionPara>
                Developed an e-commerce platform using ReactJs and Django
                featuring over 70 apparel products for online shopping.
                Engineered user-friendly functionalities to easily add/remove
                items. Implemented efficient navigation features to help
                customers easily locate items.
              </TextSectionPara>
              <Technologies>
                <TechnologiesList>Html</TechnologiesList>
                <TechnologiesList>Css</TechnologiesList>
                <TechnologiesList>ReactJS</TechnologiesList>
                <TechnologiesList>Django</TechnologiesList>
                <TechnologiesList>Material UI</TechnologiesList>
                <TechnologiesList>Axios</TechnologiesList>
                <TechnologiesList>Bootstrap</TechnologiesList>
                <TechnologiesList>Styled Components</TechnologiesList>
              </Technologies>
            </ProjectDetails>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage>
              <a href="https://github.com/vilas-123/Admission-Prediction"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={require("../images/Website.png")}
                  alt="Hydroponics Website Screenshot"
                  style={{ width: "50rem", height: "30rem" }}
                />{" "}
              </a>
            </ProjectImage>

            <ProjectDetails style={{ textAlign: "right" }}>
              <h3
                style={{
                  color: "rgb(100, 255, 218)",
                  fontSize: "1.6rem",
                  fontWeight: "lighter",
                }}
              >
                Featured Project{" "}
              </h3>
              <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                Admission Prediction Model{" "}
              </h2>

              <TextSectionPara>
                Admission Prediction Model (Keras) Built a machine learning
                model using Keras to predict university admissions based on GRE,
                GPA, TOEFL, SOP, and LOR. Designed a multi-layer neural network
                and evaluated performance using R2 scores. Utilized data
                preprocessing techniques to clean and handle missing values.
                Achieved high prediction accuracy, demonstrating strong model
                development and evaluation skills.Improved the accuacy by Adding
                hiddenlayers and MInMax Scaler
              </TextSectionPara>
              <Technologies>
                <TechnologiesList>Keras</TechnologiesList>
                <TechnologiesList> Streamlit</TechnologiesList>
                <TechnologiesList>Min-Max Scaler</TechnologiesList>
                <TechnologiesList>ANN</TechnologiesList>

                <TechnologiesList>Dataframes</TechnologiesList>
                <TechnologiesList>Machine Learning</TechnologiesList>
              </Technologies>
            </ProjectDetails>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage>
              <a href="https://github.com/vilas-123/Automatic-Restaurant-Generator-Using-Langchain"
                target="_blank"
                rel="noopener noreferrer">
                {" "}
                <img
                  src={require("../images/CatsDogs.png")}
                  alt="Training Dataset"
                  style={{ height: "30rem", width: "50rem" }}
                />{" "}
              </a>
            </ProjectImage>
            <ProjectDetails style={{ textAlign: "right" }}>
              <h3
                style={{
                  color: "rgb(100, 255, 218)",
                  fontSize: "1.6rem",
                  fontWeight: "lighter",
                }}
              >
                Featured Project
              </h3>
              <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                Restaurant Generator using Langchain and Langserve
              </h2>
              <TextSectionPara>
                Engineered a Restaurant Generator tool using Langchain and
                Langserve that provides restaurant recommendations based on a
                city input. Users can enter a city, and the model generates a
                list of relevant restaurants in that area. Enhanced the user
                experience by integrating natural language processing for
                accurate and dynamic restaurant suggestions.
              </TextSectionPara>

              <Technologies>
                <TechnologiesList>LLM'S</TechnologiesList>
                <TechnologiesList>Langchain</TechnologiesList>
                <TechnologiesList>OpenAI embeddings</TechnologiesList>
                <TechnologiesList>Streamlit</TechnologiesList>
              </Technologies>
            </ProjectDetails>
          </ProjectCard>

          <TextSectionPara>
            <h2 style={{ fontSize: "2.2rem" }}>
              Other Considerable projects ----
              <span>
                <Link
                  to={"/archiveProjects"}
                  style={{
                    textDecoration: "none",
                    color: "rgb(100, 255, 218)",
                    fontSize: "2.2 rem",
                    paddingLeft: ".8rem",
                    fontWeight: "lighter",
                  }}
                >
                  View the entire list of projects
                </Link>
              </span>
            </h2>
          </TextSectionPara>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Projects;
