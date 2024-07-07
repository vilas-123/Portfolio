import React from 'react'
import styled from 'styled-components';

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
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const TextSection = styled.div`
    max-width: 100%;
`

const TextSectionHeading = styled.div`
    font-size: 3rem;
    color: aliceblue;
    font-weight: bold;
    padding-bottom: 4rem;
`

const TextSectionPara = styled.div`
    line-height: 1.6;
    font-size: 1.8rem;
    color: rgb(136, 146, 176);
    margin-bottom: 2rem;
`
const Achievements = () => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextSection>
                        <TextSectionHeading id="about"> Achievements</TextSectionHeading>

                        <TextSectionPara> Earned Academic Excellence Certificate with highest CGPA consistently over past 4 semesters.</TextSectionPara>
                        <TextSectionPara>Achieved a finalist position in IIT Roorkee’s E-Summit Ideastorm, collaborating with a team of 5 members.</TextSectionPara>
                        <TextSectionPara>Received Excellence Certificate in Cognitive Applications (ML) Workshop, surpasssing 500 participants.</TextSectionPara>
                        <TextSectionPara>Accomplished a Contest Rating of 1650+ on Leetcode, showcasing problem-solving skills.</TextSectionPara>
                    </TextSection>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default Achievements
