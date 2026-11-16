import styled, { keyframes, css } from "styled-components";
import { FaLinkedin, FaEnvelope, FaGithub, FaArrowRight, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { contacts } from "../localizations/strings";
import { useSelector } from "react-redux";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const Contacts = () => {
  const language = useSelector((state) => state.language.language);
  const label = contacts[language];
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const contactLinks = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "kris.bakalov98@gmail.com",
      href: "mailto:kris.bakalov98@gmail.com"
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "0888905097",
      href: "tel:0888905097"
    },
    {
      icon: <FaGlobe />,
      label: "Portfolio",
      value: "kristiyan-bakalov.vercel.app",
      href: "https://kristiyan-bakalov.vercel.app"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/kristiyan-bakalov",
      href: "https://www.linkedin.com/in/kristiyan-bakalov/"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/kris-985",
      href: "https://github.com/kris-985"
    },
  ];

  return (
    <Section id="contacts" ref={sectionRef}>
      <Container isVisible={isVisible}>
        <Content>
          <SectionLabel>{label.title}</SectionLabel>
          <Heading>
            {language === 'en' 
              ? "Let's work together" 
              : "Нека работим заедно"}
          </Heading>
          <Description>{label.description}</Description>
          
          <ContactButton href="mailto:kris.bakalov98@gmail.com">
            {language === 'en' ? 'Get in touch' : 'Свържете се с мен'}
            <FaArrowRight />
          </ContactButton>
        </Content>

        <ContactGrid>
          {contactLinks.map((contact, index) => (
            <ContactCard key={index} href={contact.href} target="_blank" rel="noopener noreferrer" index={index} isVisible={isVisible}>
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

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

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
  opacity: 0;
  transform: translateY(40px);
  
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeInUp} 0.8s ease-out forwards;
  `}

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
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background: var(--accent);
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
  color: var(--foreground);
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: var(--muted-foreground);
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
  background: var(--accent);
  color: var(--accent-foreground);
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
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(30px);
  
  ${({ isVisible, index }) => isVisible && css`
    animation: ${slideInRight} 0.6s ease-out forwards;
    animation-delay: ${0.2 + index * 0.15}s;
  `}

  &:hover {
    border-color: var(--accent);
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
  color: var(--accent);
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const ContactInfo = styled.div`
  text-align: left;
`;

const ContactLabel = styled.div`
  font-size: 0.75rem;
  color: var(--muted-foreground);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.div`
  font-size: 1rem;
  color: var(--foreground);
  font-weight: 500;
`;
