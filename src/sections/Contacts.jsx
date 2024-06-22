import styled from "styled-components";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contacts } from "../localizations/strings";
import { useAppSelector } from "../store";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

export const Contacts = () => {
  const language = useAppSelector((state) => state.language.language);
  const label = contacts[language];

  return (
    <ScrollAnimation animateIn="wobble">
      <ContactsContainer id="contacts">
        <Title>{label.title}</Title>
        <Description>{label.description}</Description>
        <IconsContainer>
          <IconLink to="https://www.linkedin.com/in/kristiyan-bakalov/">
            <FaLinkedin />
          </IconLink>
          <IconLink to="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnXmtxtHDWcBpHLtfrdxWKDxQnfhdpwZMCKhthwXskXxnMNWMtTRLDMrDwnCxcZJnqlcMv">
            <FaEnvelope />
          </IconLink>
        </IconsContainer>
      </ContactsContainer>
    </ScrollAnimation>
  );
};

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem;

  @media (max-width: 1024px) {
    padding-top: 10rem; 
  }

  @media (max-width: 768px) {
    padding-top: 8rem; 
  }

  @media (max-width: 480px) {
    padding-top: 6rem; 
  }
`;

const Title = styled.h1`
  color: #cf1b1b;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #cf1b1b;
  font-size: 45px;
  margin-bottom: 2.5rem;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 50px;
  text-align: left;
  margin-bottom: 3.5rem;
  max-width: 800px;
  color: white;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled(Link)`
  font-size: 60px;
  color: white;

  &:hover {
    color: #cf1b1b;
  }

  @media (max-width: 1024px) {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

