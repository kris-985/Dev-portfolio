import styled, { keyframes, css } from "styled-components";
import { about } from "../localizations/strings";
import { useSelector } from "react-redux";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const About = () => {
  const language = useSelector((state) => state.language.language);
  const label = about[language];
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    { value: "2+", label: language === 'en' ? "Years Experience" : "Години Опит" },
    { value: "10+", label: language === 'en' ? "Projects Completed" : "Завършени Проекти" },
    { value: "5+", label: language === 'en' ? "Technologies" : "Технологии" },
  ];

  return (
    <Section id="about" ref={sectionRef}>
      <Container isVisible={isVisible}>
        <SectionLabel>{label.header}</SectionLabel>
        
        <ContentGrid>
          <TextContent>
            <Paragraph>{label.text}</Paragraph>
            <Paragraph>
              {language === 'en'
                ? 'I specialize in building responsive web applications using React, TypeScript, and modern CSS frameworks. My goal is to create intuitive interfaces that users love to interact with.'
                : 'Специализирам се в изграждането на респонсивни уеб приложения с React, TypeScript и модерни CSS фреймуърки. Целта ми е да създавам интуитивни интерфейси, с които потребителите обичат да взаимодействат.'}
            </Paragraph>
          </TextContent>
          
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard key={index} index={index} isVisible={isVisible}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </ContentGrid>
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
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(40px);
  
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeInUp} 0.8s ease-out forwards;
  `}
`;

const SectionLabel = styled.h2`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #14b8a6;
  margin-bottom: 3rem;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background: #14b8a6;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #94a3b8;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StatCard = styled.div`
  background: #111921;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(30px);
  
  ${({ isVisible, index }) => isVisible && css`
    animation: ${slideInRight} 0.6s ease-out forwards;
    animation-delay: ${0.2 + index * 0.15}s;
  `}

  &:hover {
    border-color: #14b8a6;
    transform: translateX(8px);
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #e2e8f0;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
