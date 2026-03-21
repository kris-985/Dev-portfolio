import styled from "styled-components";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiVuedotjs,
  SiNextdotjs,
  SiMysql,
  SiBootstrap,
  SiShadcnui,
  SiClerk,
} from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { skills } from "../localizations/strings";
import { useSelector } from "react-redux";

const frontEndSkills = [
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Vue", icon: <SiVuedotjs />, color: "#42b883" },
  { name: "Redux", icon: <SiRedux />, color: "#764abc" },
  { name: "ShadCN", icon: <SiShadcnui />, color: "#ffffff" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952b3" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06b6d4" },
  { name: "Styled", icon: <SiStyledcomponents />, color: "#db7093" },
];

const backEndSkills = [
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Firebase", icon: <DiFirebase />, color: "#ffca28" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
  { name: "Clerk", icon: <SiClerk />, color: "#6c47ff" },
];

export const Skills = () => {
  const language = useSelector((state) => state.language.language);
  const label = skills[language];

  return (
    <Section id="skills">
      <Container>
        <SectionLabel>{label.title}</SectionLabel>
        
        <SkillsContainer>
          <SkillCategory>
            <CategoryTitle>
              {language === 'en' ? 'Frontend' : 'Фронтенд'}
            </CategoryTitle>
            <SkillsGrid>
              {frontEndSkills.map((skill) => (
                <SkillCard key={skill.name} color={skill.color}>
                  <SkillIcon color={skill.color}>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </SkillCategory>

          <SkillCategory>
            <CategoryTitle>
              {language === 'en' ? 'Backend' : 'Бекенд'}
            </CategoryTitle>
            <SkillsGrid>
              {backEndSkills.map((skill) => (
                <SkillCard key={skill.name} color={skill.color}>
                  <SkillIcon color={skill.color}>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </SkillCategory>
        </SkillsContainer>
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

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SkillCategory = styled.div``;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  background: #111921;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    border-color: ${({ color }) => color || '#14b8a6'};
    transform: translateY(-4px);
    box-shadow: 0 10px 40px -10px ${({ color }) => color ? `${color}20` : 'rgba(20, 184, 166, 0.2)'};
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: ${({ color }) => color || '#94a3b8'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  ${SkillCard}:hover & {
    transform: scale(1.1);
  }
`;

const SkillName = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #94a3b8;
  text-align: center;
`;
