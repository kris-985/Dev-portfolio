import styled, { keyframes, css } from "styled-components";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  cake,
  fitart,
  krisfit9,
  movie,
  tracker,
} from "../assets";
import { projects } from "../localizations/strings";
import { useSelector } from "react-redux";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Import new project images from public folder
import busgoImg from "/images/busgo.png";
import eventBookingImg from "/images/event-booking.png";

const projectsData = [
  {
    title: "BusGo Bulgaria",
    description: {
      en: "Intercity bus ticketing platform - compare routes, see live seats, book passengers, and manage trips with admin dashboard.",
      bg: "Платформа за междуградски автобусни билети - сравни маршрути, виж свободни места, резервирай пътници и управлявай пътуванията."
    },
    image: busgoImg,
    tags: ["React", "Node.js", "TypeScript"],
    link: "https://busgo-bulgaria.netlify.app/",
    github: "#"
  },
  {
    title: "Event Booking",
    description: {
      en: "Modern event discovery and booking platform - browse curated events, reserve seats, and manage bookings with a fast dashboard.",
      bg: "Модерна платформа за откриване и резервиране на събития - разгледай събития, резервирай места и управлявай резервации."
    },
    image: eventBookingImg,
    tags: ["Angular", "TypeScript", "Tailwind"],
    link: "#",
    github: "https://github.com/kris-985/event-booking"
  },
  {
    title: "Fitness Tracker",
    description: {
      en: "Track your fitness journey with detailed analytics and progress monitoring.",
      bg: "Проследявай фитнес пътуването си с детайлни анализи и мониторинг на прогреса."
    },
    image: tracker,
    tags: ["React", "Firebase", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    title: "FitArt Store",
    description: {
      en: "E-commerce platform for fitness supplements and accessories.",
      bg: "Платформа за електронна търговия с фитнес добавки и аксесоари."
    },
    image: fitart,
    tags: ["React", "Firebase", "Tailwind"],
    link: "#",
    github: "https://github.com/kris-985/supplement-store"
  },
  {
    title: "Cake App",
    description: {
      en: "Beautiful cake ordering application with custom designs.",
      bg: "Красиво приложение за поръчка на торти с персонализирани дизайни."
    },
    image: cake,
    tags: ["React", "Styled Components", "API"],
    link: "https://cake-app-vercel.vercel.app/",
    github: "#"
  },
  {
    title: "KrisFit9",
    description: {
      en: "Personal training platform with workout plans and nutrition guides.",
      bg: "Платформа за персонални тренировки с планове и хранителни насоки."
    },
    image: krisfit9,
    tags: ["PHP", "Vue", "MySQL", "Tailwind"],
    link: "#",
    github: "https://github.com/kris-985/krisfit9"
  },
  {
    title: "Movie App",
    description: {
      en: "Discover and explore movies with detailed information and ratings.",
      bg: "Откриване и разглеждане на филми с детайлна информация и рейтинги."
    },
    image: movie,
    tags: ["React", "API", "CSS"],
    link: "https://movie-app-nu-wheat.vercel.app/",
    github: "#"
  },
];

export const Projects = () => {
  const language = useSelector((state) => state.language.language);
  const label = projects[language];
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.05 });

  return (
    <Section id="projects" ref={sectionRef}>
      <Container isVisible={isVisible}>
        <SectionLabel>{label.title}</SectionLabel>
        <SectionTitle>
          {language === 'en' ? 'Selected Work' : 'Избрани Проекти'}
        </SectionTitle>
        
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} index={index} isVisible={isVisible}>
              <ImageWrapper>
                <ProjectImage src={project.image} alt={project.title} />
                <ImageOverlay>
                  <OverlayLinks>
                    {project.link !== "#" && (
                      <OverlayLink href={project.link} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </OverlayLink>
                    )}
                    {project.github !== "#" && (
                      <OverlayLink href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </OverlayLink>
                    )}
                  </OverlayLinks>
                </ImageOverlay>
              </ImageWrapper>
              <CardContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description[language]}</ProjectDescription>
                <Tags>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </Tags>
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
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

const Section = styled.section`
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
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

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProjectCard = styled.article`
  background: #111921;
  border: 1px solid #1e293b;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  ${({ isVisible, index }) => isVisible && css`
    animation: ${fadeInUp} 0.6s ease-out forwards;
    animation-delay: ${0.1 * index}s;
  `}

  &:hover {
    border-color: #14b8a6;
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(10, 15, 20, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const OverlayLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const OverlayLink = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #14b8a6;
  color: #0a0f14;
  border-radius: 50%;
  font-size: 1.125rem;
  transition: all 0.2s ease;

  &:hover {
    background: #0d9488;
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9375rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #14b8a6;
  background: rgba(20, 184, 166, 0.1);
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(20, 184, 166, 0.2);
`;
