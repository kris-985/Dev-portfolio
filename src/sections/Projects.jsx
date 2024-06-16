import styled from "styled-components";
import { cake, krisfit9, movie } from "../assets";
import { projects } from "../localizations/strings";
import { useAppSelector } from "../store";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

export const Projects = () => {
  const language = useAppSelector((state) => state.language.language);
  const label = projects[language];

  return (
    <ScrollAnimation animateIn="fadeIn">
      <ProjectsContainer id="projects">
        <Title>{label.title}</Title>
        <ImagesWrapper>
          <ProjectImage to="https://github.com/kris-985/cake-app">
            <Image src={cake} alt="Cake App" />
          </ProjectImage>
          <ProjectImage to="https://github.com/kris-985/krisfit9">
            <Image src={krisfit9} alt="Krisfit9" />
          </ProjectImage>
          <ProjectImage to="https://github.com/kris-985/movie-app">
            <Image src={movie} alt="Movie App" />
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
  margin: 30px;

  @media (max-width: 480px) {
    margin: 10px;
  }

  @media (max-width: 768px) {
    margin: 15px;
  }

  @media (max-width: 1024px) {
    margin: 20px;
  }
`;

const Title = styled.h1`
  color: #cf1b1b;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #cf1b1b;
  font-size: 45px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 1024px) {
    font-size: 36px;
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 1024px) {
    gap: 20px;
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
