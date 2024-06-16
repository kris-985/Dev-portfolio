import styled from "styled-components";
import { about } from "../localizations/strings";
import { useAppSelector } from "../store";
import { react } from "../assets";
import ScrollAnimation from "react-animate-on-scroll";

export const About = () => {
  const language = useAppSelector((state) => state.language.language);
  const label = about[language];

  return (
    <ScrollAnimation animateIn="flipInX" delay={300}>
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
  padding: 50px;
  gap: 30px;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 15px;
  }
`;

const AboutUsHeader = styled.div`
  color: #cf1b1b;
  text-decoration: underline;
  text-decoration-color: #cf1b1b;
  font-size: 45px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 38px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const AboutUsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 30px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const AboutUsText = styled.div`
  color: white;
  font-size: 35px;
  flex: 1;
  padding: 20px;

  span {
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const AboutUsImage = styled.div`
  flex: 1;
  text-align: center;
  object-fit: cover;

  img {
    width: 650px;
    height: auto;
    display: block;
    border-radius: 5px;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    img {
      width: 550px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;
