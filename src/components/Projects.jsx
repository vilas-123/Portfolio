import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 5% 10%; 
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem;
`

const Content = styled.div`
    justify-content: space-between;
    align-items: flex-start;
`

const TextSectionHeading = styled.div`
    font-size: 3rem;
    color: aliceblue;
    font-weight: bold;
    padding-bottom: 4rem;
`

const TextSectionPara = styled.div`
    line-height: 1.6;
    font-size: 1.6rem;
    background-color: #1b263b;
    margin: 2rem 0rem;
    padding: 2rem;
    border: .1rem solid gray;
`

const ProjectCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    padding-bottom: 9rem;
`

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
`

const ProjectDetails = styled.div`
    flex: 1;
    line-height: 1.5;
    max-width: 50%;
    padding: 2rem;
    position: relative;
    border-radius: 0 1rem 1rem 0;
`

const Technologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding-right: 0rem;
    align-items: flex-end;
`

const TechnologiesList = styled.div`
    margin-right: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: rgb(100, 255, 218);
    background-color: #1b263b;
    padding: .5rem 1rem;
    border-radius: .5rem;
`

const Projects = () => {
    return (
        <Wrapper>
            <Container>
                <Content id="projects">
                    <TextSectionHeading>Selected Projects and Showcases  </TextSectionHeading>
                    <br />
                    <ProjectCard>
                        <ProjectImage>
                            <a href='https://github.com/jayant0146/shopping_mart/'> <img src={require('../images/Shopping.png')} alt="Shopping Mart Website Screenshot" style={{ height: "30rem", width: "50rem" }} /> </a>
                        </ProjectImage>
                        <ProjectDetails style={{ textAlign: "right" }}>
                            <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "1.6rem", fontWeight: "lighter" }}>Featured Project</h3>
                            <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>Shopping Mart Website</h2>
                            <TextSectionPara>Developed an e-commerce platform using React, featuring over 70 apparel products for online shopping. Engineered user-friendly functionalities to easily add/remove items. Implemented efficient navigation features to help customers easily locate clothing items.
                            </TextSectionPara>
                            <Technologies>
                                <TechnologiesList>Html</TechnologiesList>
                                <TechnologiesList>Css</TechnologiesList>
                                <TechnologiesList>ReactJS</TechnologiesList>
                                <TechnologiesList>NodeJS</TechnologiesList>
                                <TechnologiesList>MongoDB</TechnologiesList>
                                <TechnologiesList>Material UI</TechnologiesList>
                                <TechnologiesList>Axios</TechnologiesList>
                                <TechnologiesList>Express</TechnologiesList>
                                <TechnologiesList>Styled Components</TechnologiesList>
                            </Technologies>
                        </ProjectDetails>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectImage>
                            <a href='https://github.com/jayant0146/Hydroponics'><img src={require('../images/Website.png')} alt="Hydroponics Website Screenshot" style={{ width: "50rem", height: "30rem" }} /> </a>
                        </ProjectImage>

                        <ProjectDetails style={{ textAlign: "right" }}>
                            <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "1.6rem", fontWeight: "lighter" }}>Featured Project </h3>
                            <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>Integrated Hydroponics</h2>

                            <TextSectionPara>Applied the classification algorithm across a leaves dataset comprising over 200+ images in Roboflow. Developed a website using Tailwind CSS through CDN, integrating Tail blocks and Source Unsplash. Leveraged environmental control technologies to consistent temperature and humidity levels of 25°C and 70%.
                            </TextSectionPara>
                            <Technologies>
                                <TechnologiesList>Html</TechnologiesList>
                                <TechnologiesList>Tailwind CSS</TechnologiesList>
                                <TechnologiesList>Tailblocks</TechnologiesList>
                                <TechnologiesList>ExpressJS</TechnologiesList>
                                <TechnologiesList>Handlebars</TechnologiesList>
                                <TechnologiesList>MongoDB</TechnologiesList>
                                <TechnologiesList>Machine Learning</TechnologiesList>
                                <TechnologiesList>IOT</TechnologiesList>
                            </Technologies>
                        </ProjectDetails>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectImage>
                            <a href='https://github.com/jayant0146/Cats-Vs-Dogs-Prediction'> <img src={require('../images/CatsDogs.png')} alt="Training Dataset" style={{ height: "30rem", width: "50rem" }} /> </a>
                        </ProjectImage>
                        <ProjectDetails style={{ textAlign: "right" }}>
                            <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "1.6rem", fontWeight: "lighter" }}>Featured Project</h3>
                            <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>Cats Vs Dogs Prediction</h2>
                            <TextSectionPara> Engineered a classification algorithm achieving identification within a dataset comprising over 25,000 images. Fine-tuned the ML algorithm to attain a remarkable 98% accuracy in discriminating between cats and dogs. Slashed misclassification rates by 40% while enhancing the overall user experience.
                            </TextSectionPara>
                            <Technologies>
                                <TechnologiesList>Numpy Library</TechnologiesList>
                                <TechnologiesList>OpenCV</TechnologiesList>
                                <TechnologiesList>Matplotlib Library</TechnologiesList>
                                <TechnologiesList>Keras</TechnologiesList>
                                <TechnologiesList>Tensorflow</TechnologiesList>
                            </Technologies>
                        </ProjectDetails>
                    </ProjectCard>

                    <TextSectionPara>
                        <h2 style={{ fontSize: "2.2rem" }}>
                            Other Considerable projects ----
                            <span >
                                <Link to={'/archiveProjects'} style={{ textDecoration: "none", color: "rgb(100, 255, 218)", fontSize: "2.2 rem", paddingLeft: ".8rem", fontWeight: "lighter" }}>
                                    View the entire list of projects
                                </Link>
                            </span>
                        </h2>
                    </TextSectionPara>


                </Content>
            </Container>
        </Wrapper>
    )
}

export default Projects
