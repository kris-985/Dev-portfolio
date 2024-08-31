import styled from "styled-components";
import {
  cake,
  design,
  fitart,
  krisfit9,
  movie,
  taskmanagementapp,
} from "../assets";
import { projects } from "../localizations/strings";
import { useSelector } from "react-redux";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

export const Projects = () => {
  const language = useSelector((state) => state.language.language);
  const label = projects[language];

  return (
    <ScrollAnimation animateIn="fadeIn">
      <ProjectsContainer id="projects">
        <Title>{label.title}</Title>
        <ImagesWrapper>
          <ProjectImage to="https://cake-app-vercel.vercel.app/">
            <Image src={cake} alt="Cake App" />
          </ProjectImage>
          <ProjectImage to="https://github.com/kris-985/krisfit9">
            <Image src={krisfit9} alt="Krisfit9" />
          </ProjectImage>
          <ProjectImage to="https://movie-app-nu-wheat.vercel.app/">
            <Image src={movie} alt="Movie App" />
          </ProjectImage>
          <ProjectImage to="https://task-management-app-vert-iota.vercel.app">
            <Image src={taskmanagementapp} alt="Task Management App" />
          </ProjectImage>
          <ProjectImage to="https://github.com/kris-985/design">
            <Image src={design} alt="Design" />
          </ProjectImage>
          <ProjectImage to="https://github.com/kris-985/supplement-store">
            <Image src={fitart} alt="FitArt" />
          </ProjectImage>
        </ImagesWrapper>
      </ProjectsContainer>
    </ScrollAnimation>
  );
};

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;

  @media (max-width: 480px) {
    margin: 10px;
    padding-top: 6rem;
  }

  @media (max-width: 768px) {
    margin: 15px;
    padding-top: 6.5rem;
  }

  @media (max-width: 1024px) {
    margin: 20px;
    padding-top: 7rem;
  }
`;

const Title = styled.h1`
  color: #cf1b1b;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #cf1b1b;
  font-size: 45px;
  margin-bottom: 3.5rem;

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

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const ProjectImage = styled(Link)`
  display: inline-block;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 400px;
  height: 400px;

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
