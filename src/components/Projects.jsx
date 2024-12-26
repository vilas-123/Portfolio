import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

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

const TextSectionHeading = styled.div`
  font-size: 3rem;
  color: aliceblue;
  font-weight: bold;
  padding-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding-bottom: 2rem;
  }
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

    h3 {
      font-size: 1.4rem !important;
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
  }
`;

const ArchiveLink = styled(Link)`
  text-decoration: none;
  color: rgb(100, 255, 218);
  font-size: 2.2rem;
  padding-left: .8rem;
  font-weight: lighter;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    display: block;
    padding-left: 0;
    margin-top: 1rem;
  }
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
              <a
                href="https://github.com/vilas-123/Amazon"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://github.com/vilas-123/Admission-Prediction"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://github.com/vilas-123/Automatic-Restaurant-Generator-Using-Langchain"
                target="_blank"
                rel="noopener noreferrer"
              >
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

          <ProjectCard>
            <ProjectImage>
              <a
                href="https://github.com/vilas-123/Spotify-Clone1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  src={require("../images/spotify.jpeg")}
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
                Spotify Clone
              </h2>
              <TextSectionPara>
                Play/Pause: Allows the user to start or pause the playback of
                the currently selected track. 
                Next/Previous: Enables the user to
                skip to the next or previous track in the playlist or album.
                Seek: Allows the user to manually move forward or backward
                within a track by dragging a slider or clicking on a progress
                bar. Display the currently playing song and album artwork.
              </TextSectionPara>

              <Technologies>
                <TechnologiesList>JavaScript</TechnologiesList>
                <TechnologiesList>Bootstrap</TechnologiesList>
                <TechnologiesList>MATERIAL UI</TechnologiesList>
                <TechnologiesList>HTML </TechnologiesList>
                <TechnologiesList>CSS</TechnologiesList>
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
