import styled from "styled-components";
import { FaLinkedin, FaEnvelope, FaGithub, FaArrowRight } from "react-icons/fa";
import { contacts } from "../localizations/strings";
import { useSelector } from "react-redux";

export const Contacts = () => {
  const language = useSelector((state) => state.language.language);
  const label = contacts[language];

  const contactLinks = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "kristiyan.bakalov@gmail.com",
      href: "mailto:kristiyan.bakalov@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "@kristiyan-bakalov",
      href: "https://www.linkedin.com/in/kristiyan-bakalov/"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "@kris-985",
      href: "https://github.com/kris-985"
    },
  ];

  return (
    <Section id="contacts">
      <Container>
        <Content>
          <SectionLabel>{label.title}</SectionLabel>
          <Heading>
            {language === 'en' 
              ? "Let's work together" 
              : "Нека работим заедно"}
          </Heading>
          <Description>{label.description}</Description>
          
          <ContactButton href="mailto:kristiyan.bakalov@gmail.com">
            {language === 'en' ? 'Get in touch' : 'Свържете се с мен'}
            <FaArrowRight />
          </ContactButton>
        </Content>

        <ContactGrid>
          {contactLinks.map((contact, index) => (
            <ContactCard key={index} href={contact.href} target="_blank" rel="noopener noreferrer">
              <ContactIcon>{contact.icon}</ContactIcon>
              <ContactInfo>
                <ContactLabel>{contact.label}</ContactLabel>
                <ContactValue>{contact.value}</ContactValue>
              </ContactInfo>
            </ContactCard>
          ))}
        </ContactGrid>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const Content = styled.div``;

const SectionLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #14b8a6;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background: #14b8a6;
  }

  @media (max-width: 768px) {
    justify-content: center;
    
    &::before {
      display: none;
    }
  }
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #e2e8f0;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #94a3b8;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #14b8a6;
  color: #0a0f14;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #0d9488;
    transform: translateY(-2px);
  }

  svg {
    font-size: 0.875rem;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #111921;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #14b8a6;
    transform: translateX(8px);
  }

  @media (max-width: 768px) {
    justify-content: center;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const ContactIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 184, 166, 0.1);
  border-radius: 10px;
  color: #14b8a6;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const ContactInfo = styled.div`
  text-align: left;
`;

const ContactLabel = styled.div`
  font-size: 0.75rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.div`
  font-size: 1rem;
  color: #e2e8f0;
  font-weight: 500;
`;
