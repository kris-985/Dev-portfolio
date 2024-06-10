import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { home } from "../localizations/strings";
import { avatar } from "../assets";


export const Home = () => {
  const { language } = useSelector((state) => state.languageReducer);
  const label = home[language];

  return (
    <Fragment>
      <Container>
        <HomeData>
          <HomeTitle>
            {label.hi} <span>{label.name}</span>
          </HomeTitle>
          <HomeButton to="#contacts" smooth>
            {label.button}
          </HomeButton>
        </HomeData>
        <Image src={avatar} alt="" />
      </Container>
      <IconsContainer>
        <IconLink
          href="https://www.linkedin.com/in/kristiyan-bakalov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </IconLink>
        <IconLink
          href="https://github.com/kris-985"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </IconLink>
      </IconsContainer>
    </Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }
`;

const HomeData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const HomeTitle = styled.h1`
  color: white;
  font-size: 56px;
  span {
    color: #cf1b1b;
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HomeButton = styled(Link)`
  font-size: 20px;
  padding: 0.75rem 2.5rem;
  background-color: #cf1b1b;
  border-radius: 10px;
  color: #ffffff;
  text-decoration: none;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Image = styled.img`
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  object-fit: cover;
  margin-top: 8rem;

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  margin-top: 50px;
  margin-left: 16.5rem;

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-left: 0;
    justify-content: center;
  }
`;

const IconLink = styled.a`
  font-size: 2em;
  color: white;

  &:hover {
    color: #cf1b1b;
  }
`;
