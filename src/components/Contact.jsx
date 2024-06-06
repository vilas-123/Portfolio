import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 5% 10%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 8px 6px -6px gray;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TextSection = styled.div`
    padding: 0px 20%;
`

const TextSectionHeading = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: rgb(100, 255, 218);
    padding-bottom: 40px;
    text-align: center;
`

const TextSectionPara = styled.div`
    line-height: 1.6;
    font-size: 18px;
    color: rgb(136, 146, 176);
    margin-bottom: 20px;
    text-align: center;
`

const SearchWrap = styled.div`
    padding: 10px 39%;
`

const SearchContainer = styled.div`
  border: 0.5px solid rgb(100, 255, 218);
  font-size: 17px;
  color: rgb(100, 255, 218);
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const Contact = () => {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <TextSection>
                        <TextSectionHeading> Get in Touch</TextSectionHeading>
                        <TextSectionPara>My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.</TextSectionPara>

                        <SearchWrap>
                            <SearchContainer> <a href="mailto:sahujayant046@gmail.com" style={{ color: "rgb(100, 255, 218)", textDecoration: "none" }}> Hire Me! </a></SearchContainer>
                        </SearchWrap>

                    </TextSection>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default Contact
