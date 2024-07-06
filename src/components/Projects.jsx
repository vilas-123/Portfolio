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
    justify-content: space-between;
    align-items: flex-start;
`

const TextSection = styled.div`
    max-width: 100%;
`

const TextSectionHeading = styled.div`
    font-size: 30px;
    color: aliceblue;
    font-weight: bold;
    padding-bottom: 40px;
`

const TextSectionPara = styled.div`
    line-height: 1.6;
    font-size: 16px;
    background-color: #1b263b;
    margin: 20px 0px;
    padding: 20px;
    border: 1px solid gray;
`

const ProjectCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    padding-bottom: 90px;
`

const ProjectImage = styled.div`
    flex: 1;
    max-width: 50%;
    position: relative;
`

const ProjectDetails = styled.div`
    flex: 1;
    line-height: 1.5;
    max-width: 50%;
    padding: 20px;
    position: relative;
    border-radius: 0 10px 10px 0;
`

const Technologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding-right: 0px;
    align-items: flex-end;
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

const Projects = () => {
    return (
        <Wrapper>
            <Container>
                <Content id="projects">
                    <TextSectionHeading>Selected Projects and Showcases  </TextSectionHeading>
                    <br />
                    <ProjectCard>
                        <ProjectImage>
                            <a href='https://github.com/jayant0146/shopping_mart/'> <img src={require('../images/Shopping.png')} alt="Shopping Mart Website Screenshot" style={{ height: "300px", width: "450px" }} /> </a>
                        </ProjectImage>
                        <ProjectDetails style={{ textAlign: "right" }}>
                            <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "16px", fontWeight: "lighter" }}>Featured Project</h3>
                            <h2 style={{ fontSize: "22px" }}>Shopping Mart Website</h2>
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
                        <ProjectDetails style={{ textAlign: "left" }}>
                            <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "16px", fontWeight: "lighter" }}>Featured Project </h3>
                            <h2 style={{ fontSize: "22px" }}>Integrated Hydroponics</h2>

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

                        <ProjectImage>
                            <a href='https://github.com/jayant0146/Hydroponics'><img src={require('../images/Website.png')} alt="Hydroponics Website Screenshot" style={{ width: "500px", height: "300px" }} /> </a>
                        </ProjectImage>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectImage>
                            <a href='https://github.com/jayant0146/Cats-Vs-Dogs-Prediction'> <img src={require('../images/CatsDogs.png')} alt="Training Dataset" style={{ height: "300px", width: "490px" }} /> </a>
                        </ProjectImage>
                        <ProjectDetails style={{ textAlign: "right" }}>
                            <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "16px", fontWeight: "lighter" }}>Featured Project</h3>
                            <h2 style={{ fontSize: "22px" }}>Cats Vs Dogs Prediction</h2>
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

                    {/* <TextSectionPara><h2 style={{ fontSize: "22px" }}>Other Considerable projects ---- <span style={{ color: "rgb(100, 255, 218)", fontSize: "16px", fontWeight: "lighter" }}><Link to=''>View the entire list of projects</Link></span> </h2> </TextSectionPara> */}

                </Content>
            </Container>
        </Wrapper>
    )
}

export default Projects
