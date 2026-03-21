import { HashLink as Link } from "react-router-hash-link";
import styled, { keyframes, css } from "styled-components";
import { FaLinkedin, FaGithub, FaArrowRight, FaDownload } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { home } from "../localizations/strings";
import { avatar } from "../assets";
import { useSelector } from "react-redux";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const Home = () => {
  const language = useSelector((state) => state.language.language);
  const label = home[language];
  const textRef = useRef(null);
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const textList = ["Full-Stack Developer", "Gym Addict", "Personal Trainer"];
    let textIndex = 0;
    let charIndex = 0;

    const type = () => {
      if (textRef.current) {
        if (charIndex < textList[textIndex].length) {
          textRef.current.innerHTML += textList[textIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 80);
        } else {
          setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % textList.length;
            if (textRef.current) {
              textRef.current.innerHTML = "";
            }
            type();
          }, 2500);
        }
      }
    };

    type();
  }, []);

  return (
    <Section id="#" ref={sectionRef}>
      <Container isVisible={isVisible}>
        <LeftColumn isVisible={isVisible}>
          <Greeting>{label.hi}</Greeting>
          <Name>{label.name}</Name>
          <RoleWrapper>
            <Role ref={textRef}></Role>
            <Cursor />
          </RoleWrapper>
          
          <Description>
            {language === 'en' 
              ? 'Building pixel-perfect, accessible user interfaces with clean code and modern technologies.'
              : 'Създавам перфектни, достъпни потребителски интерфейси с чист код и модерни технологии.'}
          </Description>

          <Actions>
            <PrimaryButton to="#contacts" smooth>
              {label.button}
              <ArrowIcon />
            </PrimaryButton>
            <DownloadButton href="/CV-Kristiyan-Bakalov.pdf" download>
              {label.downloadCv}
              <FaDownload />
            </DownloadButton>
            <SocialLinks>
              <SocialLink href="https://www.linkedin.com/in/kristiyan-bakalov/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://github.com/kris-985" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </Actions>
        </LeftColumn>

        <RightColumn isVisible={isVisible}>
          <ImageWrapper>
            <AvatarImage src={avatar} alt="Kristiyan Bakalov" />
            <ImageGlow />
          </ImageWrapper>
        </RightColumn>
      </Container>

      <ScrollIndicator>
        <ScrollLine />
      </ScrollIndicator>
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

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const scrollDown = keyframes`
  0% { transform: translateY(0); opacity: 0; }
  30% { opacity: 1; }
  60% { opacity: 1; }
  100% { transform: translateY(20px); opacity: 0; }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div`
  opacity: 0;
  transform: translateY(40px);
  
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeInUp} 0.8s ease-out forwards;
  `}

  @media (max-width: 968px) {
    order: 2;
  }
`;

const Greeting = styled.span`
  font-size: 1.125rem;
  color: #94a3b8;
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #e2e8f0;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const RoleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const Role = styled.span`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 600;
  color: #14b8a6;
  font-family: 'JetBrains Mono', monospace;
  min-height: 2rem;
`;

const Cursor = styled.span`
  width: 3px;
  height: 1.75rem;
  background: #14b8a6;
  margin-left: 2px;
  animation: ${blink} 1s infinite;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #94a3b8;
  line-height: 1.7;
  max-width: 500px;
  margin-bottom: 2rem;

  @media (max-width: 968px) {
    margin: 0 auto 2rem;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

const ArrowIcon = styled(FaArrowRight)`
  color: #14b8a6;
  font-size: 0.875rem;
  transition: transform 0.2s ease;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 2rem;
  background: #14b8a6;
  color: #0a0f14;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #0d9488;
    transform: translateY(-2px);
  }

  &:hover ${ArrowIcon} {
    transform: translateX(4px);
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 2rem;
  background: transparent;
  border: 1px solid #14b8a6;
  color: #14b8a6;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: rgba(20, 184, 166, 0.1);
    transform: translateY(-2px);
  }

  svg {
    font-size: 0.875rem;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateY(2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid #1e293b;
  border-radius: 8px;
  color: #94a3b8;
  font-size: 1.25rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #14b8a6;
    color: #14b8a6;
    transform: translateY(-2px);
  }
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateX(40px);
  
  ${({ isVisible }) => isVisible && css`
    animation: ${fadeInRight} 0.8s ease-out 0.3s forwards;
  `}

  @media (max-width: 968px) {
    order: 1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  animation: ${float} 6s ease-in-out infinite;
`;

const AvatarImage = styled.img`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 20px;
  border: 2px solid #1e293b;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const ImageGlow = styled.div`
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle at center, rgba(20, 184, 166, 0.15) 0%, transparent 70%);
  border-radius: 30px;
  z-index: 0;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, #14b8a6, transparent);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    width: 5px;
    height: 5px;
    background: #14b8a6;
    border-radius: 50%;
    animation: ${scrollDown} 2s infinite;
  }
`;
