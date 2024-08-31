import styled from "styled-components";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contacts } from "../localizations/strings";
import { useSelector } from "react-redux";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

export const Contacts = () => {
  const language = useSelector((state) => state.language.language);
  const label = contacts[language];

  return (
    <ScrollAnimation animateIn="wobble">
      <ContactsContainer id="contacts">
        <Title>{label.title}</Title>
        <StickyNote>
          <Description>{label.description}</Description>
          <IconsContainer>
            <IconLinks to="https://www.linkedin.com/in/kristiyan-bakalov/">
              <FaLinkedin />
            </IconLinks>
            <IconLink to="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnXmtxtHDWcBpHLtfrdxWKDxQnfhdpwZMCKhthwXskXxnMNWMtTRLDMrDwnCxcZJnqlcMv">
              <FaEnvelope />
            </IconLink>
          </IconsContainer>
        </StickyNote>
      </ContactsContainer>
    </ScrollAnimation>
  );
};

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem;

  @media (max-width: 480px) {
    padding-top: 6rem;
  }

  @media (max-width: 1024px) {
    padding-top: 10rem;
  }
`;

const Title = styled.h1`
  color: #cf1b1b;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #cf1b1b;
  font-size: 45px;
  margin-bottom: 2.5rem;

  @media (max-width: 480px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

const StickyNote = styled.div`
  background: #fffae5;
  border: 2px solid red;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 20px;
    background: #fffae5;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const Description = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 1.5rem;
  max-width: 600px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 22px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled(Link)`
  font-size: 40px;
  color: #333;

  &:hover {
    color: #d93025;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

const IconLinks = styled(Link)`
  font-size: 40px;
  color: #333;

  &:hover {
    color: #0a66c2;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;
