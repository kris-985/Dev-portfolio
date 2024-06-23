import styled from "styled-components";
import { FaJs, FaReact } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiStyledcomponents } from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { skills } from "../localizations/strings";
import { useSelector } from "react-redux";
import ScrollAnimation from "react-animate-on-scroll";

const skillsLeft = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
];

const skillsRight = [
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Styled Components", icon: <SiStyledcomponents /> },
  { name: "Firebase", icon: <DiFirebase /> },
];

export const Skills = () => {
  const language = useSelector((state) => state.language.language);
  const label = skills[language];

  return (
    <ScrollAnimation animateIn="flipInX" delay={200}>
      <SkillsContainer id="skills">
        <Title>{label.title}</Title>
        <SkillsWrapper>
          <Column>
            {skillsLeft.map((skill) => (
              <SkillItem key={skill.name}>
                {skill.icon}
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </Column>
          <Column>
            {skillsRight.map((skill) => (
              <SkillItem key={skill.name}>
                {skill.icon}
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </Column>
        </SkillsWrapper>
      </SkillsContainer>
    </ScrollAnimation>
  );
};

const SkillsContainer = styled.div`
  padding-top: 5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 3rem;
  }

  @media (max-width: 1024px) {
    padding-top: 4rem;
  }
`;

const Title = styled.h1`
  color: #cf1b1b;
  text-decoration: underline;
  text-decoration-color: #cf1b1b;
  font-size: 45px;
  margin-bottom: 2.5rem;
  padding-top: 5rem;

  @media (max-width: 480px) {
    font-size: 30px;
    padding-top: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    padding-top: 5rem;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 8rem;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const Column = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #cf1b1b;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SkillName = styled.span`
  color: #ffffff;
  line-height: 1.5;

  &:hover {
    color: #cf1b1b;
  }
`;
