import styled from "styled-components";
import { about } from "../localizations/strings";
import { useAppSelector } from "../store";
import { react } from "../assets";
import ScrollAnimation from "react-animate-on-scroll";

export const About = () => {
  const language = useAppSelector((state) => state.language.language);
  const label = about[language];

  return (
    <ScrollAnimation animateIn="flipInX" >
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
  padding-top: 5rem; /* Standardized padding */

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
  margin-bottom: 20px;
  padding-top: 11rem; /* Added padding-top */

  @media (max-width: 1024px) {
    font-size: 38px;
    padding-top: 10.5rem; /* Adjust padding for medium screens */
  }

  @media (max-width: 768px) {
    font-size: 33px;
    text-align: center;
    padding-top: 9.5rem; /* Adjust padding for small screens */
  }

  @media (max-width: 480px) {
    font-size: 30px;
    padding-top: 8.5rem; /* Adjust padding for extra small screens */
  }
`;

const AboutUsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 20px; /* Standardized gap */

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
  padding: 20px; /* Standardized padding */
  text-align: center; /* Center text for consistency across devices */

  span {
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const AboutUsImage = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 20px; /* Standardized margin */

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
    object-fit: cover;
  }
`;
