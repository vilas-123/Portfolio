import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 1.5rem 8%;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding: 1.5rem 5%;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
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
  padding-bottom: 2rem;
  
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
  padding-bottom: 4rem;

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

const Projects = () => {
  return (
    <Wrapper>
      <Container>
        <Content id="projects">
          <TextSectionHeading>
            Projects I’ve Built{" "}
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
                E-commerce
              </h3>
              <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                Shopping Mart Full Stack Website
              </h2>
              <TextSectionPara>
                I built this React and Django shop with more than 70 apparel
                items. Shoppers can browse the catalogue and add or remove
                products from their cart.
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
                Machine learning
              </h3>
              <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                Admission prediction model{" "}
              </h2>

              <TextSectionPara>
                I trained a Keras neural network to estimate admission chances
                from GRE, GPA, TOEFL, statement-of-purpose, and recommendation
                scores. I cleaned the data, handled missing values, and
                improved the model with additional hidden layers and MinMax
                scaling.
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
                Generative AI
              </h3>
              <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                Restaurant suggestions with LangChain
              </h2>
              <TextSectionPara>
                Enter a city and the app suggests restaurants to try there. I
                built it with LangChain and LangServe, using natural-language
                processing to make the recommendations relevant to the place.
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
                Music player
              </h3>
              <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>
                Spotify Clone
              </h2>
              <TextSectionPara>
                A small Spotify-inspired player with play and pause, next and
                previous track controls, a seek bar, and the current song’s
                title and artwork.
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
              Want to see more?
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
                  Browse my other projects
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
