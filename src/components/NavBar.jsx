import { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { bulgaria, unitedKingdom } from "../assets";
import { HashLink as Link } from "react-router-hash-link";
import { navBar } from "../localizations/strings";
import { useLocation } from "react-router";
import { changeLanguage } from "../reducers/languageReducer";
import { useDispatch, useSelector } from "react-redux";

export const NavBar = () => {
  const location = useLocation();
  const [extendBar, setExtendBar] = useState(false);
  const [activeLink, setActiveLink] = useState(location.hash || "#");
  const [scrolled, setScrolled] = useState(false);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const label = navBar[language];

  useEffect(() => {
    setActiveLink(location.hash || "#");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavBar = () => setExtendBar(!extendBar);

  const handleLanguageChange = (lang) => {
    dispatch(changeLanguage(lang));
  };

  const handleNavLinkClick = () => setExtendBar(false);

  return (
    <Wrapper scrolled={scrolled} extendBar={extendBar}>
      <NavContent>
        <Logo to="#" smooth>
          <LogoText>KB</LogoText>
        </Logo>
        
        <NavLinks extendBar={extendBar}>
          <Navlink
            to="#"
            smooth
            active={activeLink === "#" ? 1 : 0}
            onClick={handleNavLinkClick}
          >
            {label.home}
          </Navlink>
          <Navlink
            to="#about"
            smooth
            active={activeLink === "#about" ? 1 : 0}
            onClick={handleNavLinkClick}
          >
            {label.about}
          </Navlink>
          <Navlink
            to="#experience"
            smooth
            active={activeLink === "#experience" ? 1 : 0}
            onClick={handleNavLinkClick}
          >
            {label.experience}
          </Navlink>
          <Navlink
            to="#skills"
            smooth
            active={activeLink === "#skills" ? 1 : 0}
            onClick={handleNavLinkClick}
          >
            {label.skills}
          </Navlink>
          <Navlink
            to="#projects"
            smooth
            active={activeLink === "#projects" ? 1 : 0}
            onClick={handleNavLinkClick}
          >
            {label.projects}
          </Navlink>
          <Navlink
            to="#contacts"
            smooth
            active={activeLink === "#contacts" ? 1 : 0}
            onClick={handleNavLinkClick}
          >
            {label.contacts}
          </Navlink>
        </NavLinks>

        <RightSection>
          <Flag>
            <FlagButton
              type="button"
              aria-label="Български"
              aria-pressed={language === "bg"}
              onClick={() => handleLanguageChange("bg")}
            >
              <FlagImg src={bulgaria} alt="" active={language === "bg" ? 1 : 0} />
            </FlagButton>
            <FlagButton
              type="button"
              aria-label="English"
              aria-pressed={language === "en"}
              onClick={() => handleLanguageChange("en")}
            >
              <FlagImg src={unitedKingdom} alt="" active={language === "en" ? 1 : 0} />
            </FlagButton>
          </Flag>
          <MenuWrapper
            type="button"
            aria-label={extendBar ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={extendBar}
            onClick={renderNavBar}
          >
            {extendBar ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </MenuWrapper>
        </RightSection>
      </NavContent>

      <MobileMenu extendBar={extendBar}>
        <Navlink
          to="#"
          smooth
          active={activeLink === "#" ? 1 : 0}
          onClick={handleNavLinkClick}
        >
          {label.home}
        </Navlink>
        <Navlink
          to="#about"
          smooth
          active={activeLink === "#about" ? 1 : 0}
          onClick={handleNavLinkClick}
        >
          {label.about}
        </Navlink>
        <Navlink
          to="#experience"
          smooth
          active={activeLink === "#experience" ? 1 : 0}
          onClick={handleNavLinkClick}
        >
          {label.experience}
        </Navlink>
        <Navlink
          to="#skills"
          smooth
          active={activeLink === "#skills" ? 1 : 0}
          onClick={handleNavLinkClick}
        >
          {label.skills}
        </Navlink>
        <Navlink
          to="#projects"
          smooth
          active={activeLink === "#projects" ? 1 : 0}
          onClick={handleNavLinkClick}
        >
          {label.projects}
        </Navlink>
        <Navlink
          to="#contacts"
          smooth
          active={activeLink === "#contacts" ? 1 : 0}
          onClick={handleNavLinkClick}
        >
          {label.contacts}
        </Navlink>
      </MobileMenu>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: ${({ scrolled }) => scrolled ? 'rgba(244, 243, 237, 0.92)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ scrolled }) => scrolled ? '1px solid rgba(30, 41, 59, 0.5)' : 'none'};
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: -0.02em;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

const Navlink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ active }) => active ? 'var(--accent)' : 'var(--muted-foreground)'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ active }) => active ? '100%' : '0'};
    height: 2px;
    background: var(--accent);
    transition: width 0.2s ease;
  }

  &:hover {
    color: var(--accent);
    &::after {
      width: 100%;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Flag = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FlagButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
`;

const FlagImg = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  cursor: pointer;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  opacity: ${({ active }) => active ? 1 : 0.65};
  transition: all 0.2s ease;
  border: 1px solid var(--border);
  box-shadow: ${({ active }) => active ? '0 0 0 1px var(--accent)' : 'none'};

  &:hover {
    opacity: 1;
  }
`;

const MenuWrapper = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--foreground);
  cursor: pointer;
  padding: 0.25rem;

  @media (max-width: 968px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 968px) {
    display: ${({ extendBar }) => extendBar ? 'flex' : 'none'};
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 2rem 2rem;
    background: rgba(244, 243, 237, 0.98);
    border-top: 1px solid rgba(30, 41, 59, 0.5);
  }
`;
