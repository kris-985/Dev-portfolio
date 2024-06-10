import { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { bg, en, icon } from "../assets";
import { HashLink as Link } from "react-router-hash-link";
import { navBar } from "../localizations/strings";
import { useLocation } from "react-router";
import { changeLanguage } from "../reducers/languageReducer";
import { useAppDispatch, useAppSelector } from "../store";

export const NavBar = () => {
  const [extendBar, setExtendBar] = useState(false);
  const language = useAppSelector((state) => state.language.language);
  const dispatch = useAppDispatch();
  const label = navBar[language];
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.hash || "#");

  useEffect(() => {
    setActiveLink(location.hash || "#");
  }, [location]);

  const renderNavBar = () => {
    setExtendBar(!extendBar);
  };

  const handleLanguageChange = (lang) => {
    dispatch(changeLanguage(lang));
  };

  return (
    <Wrapper extendBar={extendBar}>
      <LogoImage src={icon} alt="Logo" />
      <MenuWrapper onClick={renderNavBar}>
        {extendBar ? <AiOutlineClose size={25} /> : <AiOutlineMenu />}
      </MenuWrapper>
      <NavLinks extendBar={extendBar}>
        <Navlink to="#" smooth active={activeLink === "#"}>
          {label.home}
        </Navlink>
        <Navlink to="#about" smooth active={activeLink === "#about"}>
          {label.about}
        </Navlink>
        <Navlink to="#skills" smooth active={activeLink === "#skills"}>
          {label.skills}
        </Navlink>
        <Navlink to="#projects" smooth active={activeLink === "#projects"}>
          {label.projects}
        </Navlink>
        <Navlink to="#contacts" smooth active={activeLink === "#contacts"}>
          {label.contacts}
        </Navlink>
      </NavLinks>
      <Flag>
        <FlagImg
          src={bg}
          alt="Bulgarian"
          onClick={() => handleLanguageChange("bg")}
        />
        <FlagImg
          src={en}
          alt="English"
          onClick={() => handleLanguageChange("en")}
        />
      </Flag>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #1f1f1f;
  border-bottom: 2px solid black;
  padding: 0 20px;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media (max-width: 480px) {
    flex-direction: column;
    height: ${({ extendBar }) => (extendBar ? "240px" : "60px")};
    padding: ${({ extendBar }) => (extendBar ? "10px 0" : "0 20px")};
  }
`;

const LogoImage = styled.img`
  width: 70px;
  height: 60px;

  @media (max-width: 480px) {
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
  }
`;

const Navlink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  cursor: pointer;
  margin-right: 40px;
  border-bottom: ${({ active }) => (active ? "2px solid red" : "none")};

  &:hover {
    color: red;
  }

  @media (max-width: 480px) {
    margin: 10px 0;
    font-size: 16px;
  }
`;

const MenuWrapper = styled.span`
  cursor: pointer;
  color: white;
  display: none;

  @media (max-width: 480px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 20px;
  }
`;

const Flag = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const FlagImg = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (max-width: 480px) {
    display: none;
  }
`;
