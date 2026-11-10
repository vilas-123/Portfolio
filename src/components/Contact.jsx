import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  padding: 1.5rem 8%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0rem 0.8rem 0.6rem -0.6rem gray;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextSection = styled.div`
  padding: 0 10%;
`;

const TextSectionHeading = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: rgb(100, 255, 218);
  padding-bottom: 2rem;
  text-align: center;
`;

const TextSectionPara = styled.div`
  line-height: 1.6;
  font-size: 1.8rem;
  color: rgb(136, 146, 176);
  margin-bottom: 2rem;
  text-align: center;
`;

const SearchWrap = styled.div`
  padding: 0.8rem 35%;
  text-align: center;
`;

const SearchContainer = styled.div`
  border: 0.05rem solid rgb(100, 255, 218);
  font-size: 1.7rem;
  color: rgb(100, 255, 218);
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <TextSection id="contact">
            <TextSectionHeading> Get in Touch</TextSectionHeading>
            <TextSectionPara>
              Email:{" "}
              <a
                href="mailto:vilasharapanahalli317@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                vilasharapanahalli317@gmail.com
              </a>
            </TextSectionPara>

            <TextSectionPara>
              GitHub:{" "}
              <a
                href="https://github.com/vilas-123"
                style={{ textDecoration: "none", color: "rgb(100, 255, 218)" }}
              >
                github.com/vilas-123
              </a>
            </TextSectionPara>
            <TextSectionPara>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/vilas-harapanahalli-96b231244/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "rgb(100, 255, 218)" }}
              >
                Vilas Harapanahalli
              </a>
            </TextSectionPara>
            <TextSectionPara>
              Interested in working together, curious about a project, or just
              want to say hello? I’d be happy to hear from you.
            </TextSectionPara>

            <SearchWrap>
              <SearchContainer>
                {" "}
                <a
                  href="mailto:vilasharapanahalli317@gmail.com"
                  style={{
                    color: "rgb(100, 255, 218)",
                    textDecoration: "none",
                  }}
                >
                  Let’s talk
                </a>
              </SearchContainer>
            </SearchWrap>
          </TextSection>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Contact;
