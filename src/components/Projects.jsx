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
                <Content>
                    <TextSectionHeading>Some Things I've Built   </TextSectionHeading>
                    <br />
                    <ProjectCard>
                        <ProjectImage>
                            <img src="project-screenshot.png" alt="Blogging Website Screenshot" />
                        </ProjectImage>
                        <ProjectDetails style={{ textAlign: "right" }}>
                            <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "16px", fontWeight: "lighter" }}>Featured Project</h3>
                            <h2 style={{ fontSize: "22px" }}>Blogging Website</h2>
                            <TextSectionPara>Blogging-Website on which user can create their own blogs & it will be saved in the database, so that when the user will come again he/she will be able to see & read the previous blogs.
                            </TextSectionPara>
                            <Technologies>
                                <TechnologiesList>Html</TechnologiesList>
                                <TechnologiesList>Css</TechnologiesList>
                                <TechnologiesList>Ejs</TechnologiesList>
                                <TechnologiesList>Node</TechnologiesList>
                                <TechnologiesList>MongoDB</TechnologiesList>
                            </Technologies>
                        </ProjectDetails>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectDetails style={{ textAlign: "left" }}>
                            <h3 style={{ color: "rgb(100, 255, 218)", fontSize: "16px", fontWeight: "lighter" }}>Featured Project</h3>
                            <h2 style={{ fontSize: "22px" }}>Blogging Website</h2>
                            <TextSectionPara>Blogging-Website on which user can create their own blogs & it will be saved in the database, so that when the user will come again he/she will be able to see & read the previous blogs.
                            </TextSectionPara>
                            <Technologies>
                                <TechnologiesList>Html</TechnologiesList>
                                <TechnologiesList>Css</TechnologiesList>
                                <TechnologiesList>Ejs</TechnologiesList>
                                <TechnologiesList>Node</TechnologiesList>
                                <TechnologiesList>MongoDB</TechnologiesList>
                            </Technologies>
                        </ProjectDetails>

                        <ProjectImage>
                            <img src="project-screenshot.png" alt="Blogging Website Screenshot" />
                        </ProjectImage>
                    </ProjectCard>


                </Content>
            </Container>
        </Wrapper>
    )
}

export default Projects
