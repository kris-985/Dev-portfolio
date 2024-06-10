import { useSelector } from "react-redux";
import styled from "styled-components";
import { about } from "../localizations/strings";

export const About = () => {
  const { language } = useSelector((state) => state.languageReducer);
  const label = about[language];

  return (
    <AboutUsContainer id="about">
      <AboutUsHeader>{label.header}</AboutUsHeader>
      <AboutUsContent>
        <AboutUsImage>
          <img
            src="https://c8.alamy.com/comp/2DAW2TH/react-js-inscription-against-laptop-and-code-background-learn-react-programming-language-computer-courses-training-2DAW2TH.jpg"
            alt="React"
          />
        </AboutUsImage>
        <AboutUsText>{label.text}</AboutUsText>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const AboutUsHeader = styled.div`
  color: #cf1b1b;
  text-decoration: underline;
  text-decoration-color: #cf1b1b;
  font-size: 45px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

const AboutUsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutUsText = styled.div`
  color: white;
  font-size: 40px;
  flex: 1;
  padding: 20px;

  span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
  }
`;

const AboutUsImage = styled.div`
  flex: 1;
  text-align: center;
  object-fit: cover;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
