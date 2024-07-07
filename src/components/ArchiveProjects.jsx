import React from 'react'
import { styled } from 'styled-components'
import Navbar2 from './Navbar2';

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
const Emphasize = styled.div`
    color: rgb(100, 255, 218);
    font-size: 4rem;
    font-weight: bold;
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
const ArchiveProjects = () => {
    return (<>
        <Navbar2 />
        <Wrapper>
            <Emphasize> Other Noteworthy Projects</Emphasize>
            <Container>
                <Content>

                    <ProjectCard>
                        <ProjectImage>
                            <a href='https://github.com/jayant0146/Autobot-Tryst-Challenge'> <img src={require('../images/autobot.png')} alt="Autobot Code Screenshot" style={{ height: "30rem", width: "50rem" }} /> </a>
                        </ProjectImage>
                        <ProjectDetails style={{ textAlign: "right" }}>

                            <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>Tryst AutoBot</h2>
                            <TextSectionPara> Autobot detected the object's path accurately from the lane video on the pathway and also defined the function for the interested
                                regions and the edged lines.
                                Trained the model for various objects like animals, persons, cones, Traffic Lights, and Stops or any other obstacles in the path
                            </TextSectionPara>
                            <Technologies>
                                <TechnologiesList>Machine Learning</TechnologiesList>
                                <TechnologiesList>OpenCv</TechnologiesList>
                                <TechnologiesList>Numpy</TechnologiesList>
                                <TechnologiesList>Matplotlib</TechnologiesList>
                                <TechnologiesList>Training & Testing Model</TechnologiesList>
                                <TechnologiesList>Keras</TechnologiesList>
                                <TechnologiesList>Tensorflow</TechnologiesList>
                            </Technologies>
                        </ProjectDetails>
                    </ProjectCard>


                    <ProjectCard>
                        <ProjectImage>
                            <a href='https://drive.google.com/file/d/1wSlchZsVqHYHrQA5etC4bS31KNwZYBHP/view?usp=drive_link'> <img src={require('../images/smartroom.png')} alt="Smart Room  Screenshot" style={{ height: "30rem", width: "50rem" }} /> </a>
                        </ProjectImage>
                        <ProjectDetails style={{ textAlign: "right" }}>

                            <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>Smart Room</h2>
                            <TextSectionPara> Facilitated remote control of lighting, temperature, and security by integrating IOT via smartphones all 365 days.
                                Elevated security and safety measures through IoT-enabled smart homes by deploying 360-degree PVZ cameras.
                                Transformed standard bins into intelligent bins utilizing ultrasonic SRC sensors, enabling automated updates.
                                Automated fan activation and deactivation upon temperature surpassing 25°C or reaching a specific predefined threshold.
                            </TextSectionPara>
                            <Technologies>
                                <TechnologiesList>IOT</TechnologiesList>
                                <TechnologiesList>Node MCU</TechnologiesList>
                                <TechnologiesList>Sensor Networks</TechnologiesList>
                                <TechnologiesList>Arduino</TechnologiesList>
                            </Technologies>
                        </ProjectDetails>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectImage>
                            <a href='https://github.com/jayant0146/Portfolio-2.0'> <img src={require('../images/Portfolio.png')} alt="Portfolio  Screenshot" style={{ height: "30rem", width: "50rem" }} /> </a>
                        </ProjectImage>
                        <ProjectDetails style={{ textAlign: "right" }}>

                            <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>Portfolio</h2>
                            <TextSectionPara> Designed and implemented innovative strategies to showcase educational background, qualifications, professional experiences, and abilities through a digital portfolio
                                Utilized ReactJS, HTML, and CSS skills to gather and organize portfolio information
                                Crafted engaging and professional portfolio content to highlight key accomplishments and skills effectively
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
                            <a href='https://github.com/jayant0146/Quiz-App-Using-React'> <img src={require('../images/quiz.png')} alt="Quiz App  Screenshot" style={{ height: "30rem", width: "50rem" }} /> </a>
                        </ProjectImage>
                        <ProjectDetails style={{ textAlign: "right" }}>

                            <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>Quiz App</h2>
                            <TextSectionPara> This is the Intuitive Quiz Hub using React. After entering the details, one can enter into the quiz questions. Questions along with four options will be displayed on the screen, and then clicking on the option we can view our score. After finishing the quiz, total score will be displayed
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
                            <a href='https://github.com/jayant0146/Resume-Templates'> <img src={require('../images/resume.png')} alt="Resume Template Screenshot" style={{ height: "30rem", width: "50rem" }} /> </a>
                        </ProjectImage>
                        <ProjectDetails style={{ textAlign: "right" }}>

                            <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>Resume Templates</h2>
                            <TextSectionPara> Resume templates are designed to enhance readability and overall presentation, ensuring the beat resume stands out. With 7-8 different templates available, one can easily switch between styles to find the one that best suits own needs. These templates are crafted to facilitate a smooth and efficient resume creation process, helping everyone to present the qualifications and experiences in the most compelling way.
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
                            <a href='https://to-do-app-ten-lake.vercel.app/ '> <img src={require('../images/todoapp.png')} alt="To Do App Screenshot" style={{ height: "30rem", width: "50rem" }} /> </a>
                        </ProjectImage>
                        <ProjectDetails style={{ textAlign: "right" }}>

                            <h2 style={{ fontSize: "2.2rem", color: "rgb(237, 135, 33)" }}>To Do App</h2>
                            <TextSectionPara> To-do apps enable efficient task management by allowing to track, prioritize, and focus on critical tasks, thereby boosting productivity and efficiency. Having all the tasks centralized in one place enhances organization and ensures no task is missed. Additionally, this to-do app is highly responsive, automatically adjusting to fit longer entries within the designated space. Users can effortlessly add or remove items from their list, streamlining the task management process.
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
    )
}

export default ArchiveProjects
