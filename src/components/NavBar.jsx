import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { bulgaria, england, icon } from "../assets";
import { HashLink as Link } from "react-router-hash-link";
import { navBar } from "../localizations/strings";
import { useLocation } from "react-router";
import { changeLanguage } from "../reducers/languageReducer";
import { useDispatch, useSelector } from "react-redux";

export const NavBar = () => {
  const location = useLocation();
  const [extendBar, setExtendBar] = useState(false);
  const [activeLink, setActiveLink] = useState(location.hash || "#");
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const label = navBar[language];

  useEffect(() => {
    setActiveLink(location.hash || "#");
  }, [location]);

  const renderNavBar = () => setExtendBar(!extendBar);

  const handleLanguageChange = (lang) => {
    dispatch(changeLanguage(lang));
  };

  const handleNavLinkClick = () => setExtendBar(false);

  return (
    <Wrapper extendBar={extendBar}>
      <Navlink to="#" smooth isLogo={true}>
        <LogoImage src={icon} alt="Logo" />
      </Navlink>
      <NavLinks extendBar={extendBar}>
        <Navlink
          to="#"
          smooth
          active={activeLink === "#"}
          onClick={handleNavLinkClick}
        >
          {label.home}
        </Navlink>
        <Navlink
          to="#about"
          smooth
          active={activeLink === "#about"}
          onClick={handleNavLinkClick}
        >
          {label.about}
        </Navlink>
        <Navlink
          to="#skills"
          smooth
          active={activeLink === "#skills"}
          onClick={handleNavLinkClick}
        >
          {label.skills}
        </Navlink>
        <Navlink
          to="#projects"
          smooth
          active={activeLink === "#projects"}
          onClick={handleNavLinkClick}
        >
          {label.projects}
        </Navlink>
        <Navlink
          to="#contacts"
          smooth
          active={activeLink === "#contacts"}
          onClick={handleNavLinkClick}
        >
          {label.contacts}
        </Navlink>
      </NavLinks>
      <Flag>
        <FlagImg
          src={bulgaria}
          alt="BG"
          onClick={() => handleLanguageChange("bg")}
        />
        <FlagImg
          src={england}
          alt="EN"
          onClick={() => handleLanguageChange("en")}
        />
      </Flag>
      <MenuWrapper extendBar={extendBar} onClick={renderNavBar}>
        {extendBar ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </MenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1f1f1f;
  border-bottom: 2px solid #cf1b1b;
  padding: 0 20px;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media (max-width: 480px) {
    height: ${({ extendBar }) => (extendBar ? "260px" : "65px")};
    padding: 0 20px;
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    padding: 0 10px;
  }

`;

const shine = keyframes`
  0%,
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }`;

const LogoImage = styled.img`
  width: 70px;
  height: 60px;
  animation: ${shine} 4s infinite;
  
  @media (max-width: 480px) {
    width: 50px;
    height: 40px;
    position: absolute;
    top: 10px;
    left: 20px;
  }

  @media (max-width: 1024px) {
    width: 50px;
    height: 40px;
  }
`;


const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    display: ${({ extendBar }) => (extendBar ? "flex" : "none")};
    margin-top: 26px;
  }
`;

const Navlink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  cursor: pointer;
  margin-right: 40px;
  border-bottom: ${({ active }) => (active ? "2px solid #cf1b1b" : "none")};

  &:hover {
    border-bottom: ${({ isLogo }) => (isLogo ? "none" : "2px solid #cf1b1b ")};
  }

  @media (max-width: 480px) {
    margin: 10px 0;
    font-size: 16px;
  }
`;

const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Flag = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    position: absolute;
    top: 10px;
  }
`;

const FlagImg = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
  animation: ${wave} 2s infinite;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: rotate(-90deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: rotate(0deg);
  }
  to {
    opacity: 0;
    transform: rotate(90deg);
  }
`;

const MenuWrapper = styled.span`
  cursor: pointer;
  color: #cf1b1b;
  display: none;
  animation: ${({ extendBar }) => (extendBar ? fadeIn : fadeOut)} 0.3s
    ease-in-out;

  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 17px;
    right: 20px;
  }
`;
