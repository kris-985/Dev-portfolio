import styled from "styled-components";
import { about } from "../localizations/strings";
import { useAppSelector } from "../store";
import { react } from "../assets";
import ScrollAnimation from "react-animate-on-scroll";

export const About = () => {
  const language = useAppSelector((state) => state.language.language);
  const label = about[language];

  return (
    <ScrollAnimation animateIn="flipInY" >
      <AboutUsContainer id="about">
        <AboutUsHeader>{label.header}</AboutUsHeader>
        <AboutUsContent>
          <AboutUsImage>
            <img src={react} alt="ReactJS" />
          </AboutUsImage>
          <AboutUsText>{label.text}</AboutUsText>
        </AboutUsContent>
      </AboutUsContainer>
    </ScrollAnimation>
  );
};

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding-top: 2.5rem;
  }

  @media (max-width: 768px) {
    padding-top: 1.5rem;
  }

  @media (max-width: 480px) {
    padding-top: 1rem;
  }
`;

const AboutUsHeader = styled.div`
  color: #cf1b1b;
  text-decoration: underline;
  text-decoration-color: #cf1b1b;
  font-size: 45px;
  margin-bottom: 2.5rem;
  padding-top: 11rem; 

  @media (max-width: 1024px) {
    font-size: 40px;
    padding-top: 10.5rem; 
  }

  @media (max-width: 768px) {
    font-size: 35px;
    text-align: center;
    padding-top: 9.5rem; 
  }

  @media (max-width: 480px) {
    font-size: 30px;
    padding-top: 8.5rem; 
  }
`;

const AboutUsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 20px; 

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutUsText = styled.div`
  color: white;
  font-size: 35px;
  flex: 1;
  padding: 20px; 
  text-align: center; 

  span {
    font-weight: bold;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

const AboutUsImage = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 20px; 
  
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
    object-fit: cover;
  }
`;
