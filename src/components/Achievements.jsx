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

                        <TextSectionPara>Earned Gold Google Badge for Excellence in NLP,LLMs  .</TextSectionPara>
                        <TextSectionPara>Earned Cisco CCNA Security under lecturer Matt Constable (2023)</TextSectionPara>
                        <TextSectionPara>Received Excellence Certificate in Cognitive Applications (ML) Workshop, surpasssing 500 participants.</TextSectionPara>
                        <TextSectionPara>Winner of IEEE project Symposium Prakalp 2024 ,Credientials:STB99412</TextSectionPara>
                    </TextSection>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default Achievements
