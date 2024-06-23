import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Fragment, useEffect, useRef } from "react";
import { home } from "../localizations/strings";
import { avatar } from "../assets";
import { useAppSelector } from "../store";
import anime from "animejs";
import { particleJs } from "../utils/helpers";
import ScrollAnimation from "react-animate-on-scroll";

export const Home = () => {
  const language = useAppSelector((state) => state.language.language);
  const label = home[language];
  const textRef = useRef(null);

  useEffect(() => {
    const textList = ["React.js Developer", "Gym Addict", "Personal Trainer"];
    let textIndex = 0;
    let charIndex = 0;

    const type = () => {
      if (charIndex < textList[textIndex].length) {
        textRef.current.innerHTML += textList[textIndex].charAt(charIndex);
        charIndex++;
        anime({
          targets: textRef.current,
          duration: 200,
          easing: "easeInOutQuad",
        });
        setTimeout(type, 300);
      } else {
        setTimeout(() => {
          charIndex = 0;
          textIndex = (textIndex + 1) % textList.length;
          textRef.current.innerHTML = "";
          type();
        }, 2000);
      }
    };

    type();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      window.particlesJS("particles-js", particleJs);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <Fragment>
      <ScrollAnimation animateIn="fadeIn">
        <ParticlesContainer id="particles-js"/>
        <Container>
          <HomeData>
            <HomeTitle>
              {label.hi}
              <br />
              <span>{label.name}</span>
              <TextRef ref={textRef}></TextRef>
            </HomeTitle>
            <br />
            <HomeButton to="#contacts" smooth>
              {label.button}
            </HomeButton>
          </HomeData>
          <ImageContainer>
            <img src={avatar} alt="Avatar" />
          </ImageContainer>
        </Container>
        <IconsContainer>
          <IconLink to="https://www.linkedin.com/in/kristiyan-bakalov/">
            <FaLinkedin />
          </IconLink>
          <IconLink to="https://github.com/kris-985">
            <FaGithub />
          </IconLink>
        </IconsContainer>
      </ScrollAnimation>
    </Fragment>
  );
};

const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1024px) and (min-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }

  @media (max-width: 480px) {
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

  @media (max-width: 1024px) and (min-width: 480px) {
    max-width: 80%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
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

  @media (max-width: 1024px) and (min-width: 480px) {
    font-size: 42px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const TextRef = styled.span`
  min-width: 500px;
`;

const HomeButton = styled(Link)`
  font-size: 20px;
  padding: 0.75rem 2.5rem;
  background-color: #cf1b1b;
  border-radius: 10px;
  color: #ffffff;
  text-decoration: none;
  margin-top: 10px;

  @media (max-width: 1024px) and (min-width: 480px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 8rem;

  @media (max-width: 1024px) and (min-width: 480px) {
    margin-top: 4rem;
    width: 80%;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    width: 100%;
  }

  img {
    object-fit: cover;
    display: block;
    width: 100%;
    box-shadow: 10px 10px 0 0 #cf1b1b;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  margin-top: 4.5rem;
  margin-left: 12.5rem;

  @media (max-width: 1024px) and (min-width: 480px) {
    margin-top: 40px;
    margin-left: 0;
    justify-content: center;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    margin-left: 0;
    justify-content: center;
  }
`;

const IconLink = styled(Link)`
  font-size: 2em;
  color: white;

  &:hover {
    color: #cf1b1b;
  }
`;
