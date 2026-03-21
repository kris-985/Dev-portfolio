import styled, { keyframes, css } from "styled-components";
import { FaBriefcase } from "react-icons/fa";
import { experience } from "../localizations/strings";
import { useSelector } from "react-redux";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const experienceData = [
  {
    title: {
      en: "Junior Software Engineer",
      bg: "Младши Софтуерен Инженер"
    },
    company: "Smarch",
    period: "05/2025 - 02/2026",
    description: {
      en: [
        "Developed REST APIs with Node.js",
        "Implemented authentication using JWT (jsonwebtoken)",
        "Integrated APIs in React applications",
        "Managed global state with Zustand",
        "Handled server state, caching and mutations with TanStack React Query"
      ],
      bg: [
        "Разработих REST API с Node.js",
        "Имплементирах автентикация използвайки JWT (jsonwebtoken)",
        "Интегрирах API в React приложения",
        "Управлявах глобално състояние със Zustand",
        "Работих със сървърно състояние, кеширане и мутации с TanStack React Query"
      ]
    }
  },
  {
    title: {
      en: "Intern Front-end Developer",
      bg: "Стажант Front-end Разработчик"
    },
    company: "ClearWare",
    period: "09/2023 - 11/2023",
    description: {
      en: [
        "Working in a team to develop a web application",
        "Creating components, building interfaces, and maintaining existing code"
      ],
      bg: [
        "Работа в екип за разработване на уеб приложение",
        "Създаване на компоненти, изграждане на интерфейси и поддръжка на съществуващ код"
      ]
    }
  },
  {
    title: {
      en: "Intern Front-end Developer",
      bg: "Стажант Front-end Разработчик"
    },
    company: "IlievSoft",
    period: "06/2023 - 08/2023",
    description: {
      en: [
        "Using React.js to create components and add interactivity to the application",
        "Optimizing web pages for better performance"
      ],
      bg: [
        "Използване на React.js за създаване на компоненти и добавяне на интерактивност",
        "Оптимизиране на уеб страници за по-добра производителност"
      ]
    }
  }
];

export const Experience = () => {
  const language = useSelector((state) => state.language.language);
  const label = experience[language];
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <Section id="experience" ref={sectionRef}>
      <Container isVisible={isVisible}>
        <SectionLabel>{label.title}</SectionLabel>
        <SectionTitle>
          {language === 'en' ? 'Work Experience' : 'Работен Опит'}
        </SectionTitle>

        <Timeline>
          {experienceData.map((exp, index) => (
            <TimelineItem key={index} index={index} isVisible={isVisible}>
              <TimelineMarker>
                <MarkerIcon>
                  <FaBriefcase />
                </MarkerIcon>
                {index < experienceData.length - 1 && <TimelineLine />}
              </TimelineMarker>
              
              <TimelineContent>
                <ContentHeader>
                  <TitleWrapper>
                    <JobTitle>{exp.title[language]}</JobTitle>
                    <Company>{exp.company}</Company>
                  </TitleWrapper>
                  <Period>{exp.period}</Period>
                </ContentHeader>
                <DescriptionList>
                  {exp.description[language].map((item, i) => (
                    <DescriptionItem key={i}>{item}</DescriptionItem>
                  ))}
                </DescriptionList>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
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
  max-width: 900px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(40px);
  
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeInUp} 0.8s ease-out forwards;
  `}
`;

const SectionLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #14b8a6;
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

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #e2e8f0;
  margin: 1rem 0 3rem;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 1.5rem;
  opacity: 0;
  
  ${({ isVisible, index }) => isVisible && css`
    animation: ${slideInLeft} 0.6s ease-out forwards;
    animation-delay: ${index * 0.2}s;
  `}

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const TimelineMarker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

const MarkerIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 184, 166, 0.1);
  border: 2px solid #14b8a6;
  border-radius: 50%;
  color: #14b8a6;
  font-size: 1.125rem;
  z-index: 1;
  transition: all 0.3s ease;

  ${TimelineItem}:hover & {
    background: #14b8a6;
    color: #0a0f14;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const TimelineLine = styled.div`
  width: 2px;
  flex: 1;
  background: linear-gradient(180deg, #14b8a6 0%, rgba(20, 184, 166, 0.2) 100%);
  min-height: 100px;
`;

const TimelineContent = styled.div`
  background: #111921;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 1.5rem;
  flex: 1;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #14b8a6;
    transform: translateX(8px);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    
    &:hover {
      transform: none;
    }
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const TitleWrapper = styled.div``;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Company = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #14b8a6;
`;

const Period = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #94a3b8;
  background: rgba(148, 163, 184, 0.1);
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  white-space: nowrap;
`;

const DescriptionList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DescriptionItem = styled.li`
  font-size: 0.9375rem;
  color: #94a3b8;
  line-height: 1.6;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.625rem;
    width: 6px;
    height: 6px;
    background: #14b8a6;
    border-radius: 50%;
  }
`;
