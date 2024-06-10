import styled from "styled-components";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import { contacts } from "../localizations/strings";

export const Contacts = () => {
  const { language } = useSelector((state) => state.languageReducer);
  const label = contacts[language];
  
  return (
    <ContactsContainer id="contacts">
      <Title>{label.title}</Title>
      <Description>{label.description}</Description>
      <IconsContainer>
        <IconLink
          href="https://www.linkedin.com/in/kristiyan-bakalov/"
          target="_blank"
        >
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnXmtxtHDWcBpHLtfrdxWKDxQnfhdpwZMCKhthwXskXxnMNWMtTRLDMrDwnCxcZJnqlcMv">
          <FaEnvelope />
        </IconLink>
      </IconsContainer>
    </ContactsContainer>
  );
};

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #cf1b1b;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #cf1b1b;
  font-size: 60px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 50px;
  text-align: left;
  margin-bottom: 20px;
  max-width: 800px;
  color: white;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled.a`
  font-size: 60px;
  color: white;

  &:hover {
    color: #cf1b1b;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
