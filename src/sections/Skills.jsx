import styled from "styled-components";
import { FaJs, FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiVuedotjs,
  SiNextdotjs,
  SiMysql,
  SiBootstrap,
  SiPhp,
} from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { skills } from "../localizations/strings";
import { useSelector } from "react-redux";
import ScrollAnimation from "react-animate-on-scroll";

const frontEndSkills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Vue", icon: <SiVuedotjs /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Styled Components", icon: <SiStyledcomponents /> },
  { name: "Next", icon: <SiNextdotjs /> },
];

const backEndSkills = [
  { name: "Firebase", icon: <DiFirebase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PHP", icon: <SiPhp /> },
];

export const Skills = () => {
  const language = useSelector((state) => state.language.language);
  const label = skills[language];

  return (
    <ScrollAnimation animateIn="flipInX" delay={200}>
      <SkillsContainer id="skills">
        <Title>{label.title}</Title>
        <SkillsWrapper>
          <SkillCard>
            <CardTitle>Front-End Technologies</CardTitle>
            <SkillsRow>
              {frontEndSkills.map((skill) => (
                <SkillItem key={skill.name}>
                  {skill.icon}
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </SkillsRow>
          </SkillCard>
          <SkillCard>
            <CardTitle>Back-End Technologies</CardTitle>
            <SkillsRow>
              {backEndSkills.map((skill) => (
                <SkillItem key={skill.name}>
                  {skill.icon}
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </SkillsRow>
          </SkillCard>
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
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const SkillCard = styled.div`
  background-color: #fffae5;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid red;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 800px;
  text-align: left;
  position: relative;
  transform: rotate(-2deg);

  &:before {
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

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CardTitle = styled.h2`
  color: #cf1b1b;
  font-size: 24px;
  margin-bottom: 20px;
  font-family: "Caveat", cursive;
`;

const SkillsRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 40px;
  color: #333333;
  margin-bottom: 15px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    color: red;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SkillName = styled.span`
  color: #333333;
  line-height: 1.5;
  font-family: "Caveat", cursive;

  &:hover {
    color: red;
  }
`;
