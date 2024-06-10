import styled from "styled-components";
import { cake, krisfit9, movie } from "../assets";
import { useSelector } from "react-redux";
import { projects } from "../localizations/strings";

export const Projects = () => {
  const { language } = useSelector((state) => state.languageReducer);
  const label = projects[language];
  return (
    <ProjectsContainer id="projects">
      <Title>{label.title}</Title>
      <ImagesWrapper>
        <ProjectImage
          href="https://github.com/kris-985/cake-app"
          target="_blank"
        >
          <Image src={cake} alt="" />
        </ProjectImage>
        <ProjectImage
          href="https://github.com/kris-985/krisfit9"
          target="_blank"
        >
          <Image src={krisfit9} alt="" />
        </ProjectImage>
        <ProjectImage
          href="https://github.com/kris-985/movie-app"
          target="_blank"
        >
          <Image src={movie} alt="" />
        </ProjectImage>
      </ImagesWrapper>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  @media (max-width: 768px) {
    margin: 15px;
  }
`;

const Title = styled.h1`
  color: #cf1b1b;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #cf1b1b;
  font-size: 45px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const ProjectImage = styled.a`
  display: inline-block;
  border-radius: 0.5rem;
  overflow: hidden;

  width: 400px;
  height: 400px;

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
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
