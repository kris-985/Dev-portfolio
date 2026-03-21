import styled from "styled-components";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { footer } from "../localizations/strings";
import { useSelector } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";

export const Footer = () => {
  const language = useSelector((state) => state.language.language);
  const label = footer[language];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kristiyan-bakalov/", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/kris-985", label: "GitHub" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
  ];

  const navLinks = [
    { label: language === 'en' ? 'Home' : 'Начало', to: '#' },
    { label: language === 'en' ? 'About' : 'За мен', to: '#about' },
    { label: language === 'en' ? 'Skills' : 'Умения', to: '#skills' },
    { label: language === 'en' ? 'Projects' : 'Проекти', to: '#projects' },
    { label: language === 'en' ? 'Contact' : 'Контакти', to: '#contacts' },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <LogoSection>
            <Logo>KB</Logo>
            <TagLine>
              {language === 'en' 
                ? 'Building digital experiences' 
                : 'Създаване на дигитални преживявания'}
            </TagLine>
          </LogoSection>

          <NavLinks>
            {navLinks.map((link, index) => (
              <NavLink key={index} to={link.to} smooth>
                {link.label}
              </NavLink>
            ))}
          </NavLinks>

          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialLink key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                {social.icon}
              </SocialLink>
            ))}
          </SocialLinks>
        </FooterTop>

        <Divider />

        <FooterBottom>
          <Copyright>
            &copy; {new Date().getFullYear()} {label.name}. {label.copyright}
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #0d1117;
  border-top: 1px solid #1e293b;
  padding: 3rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 1.5rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const LogoSection = styled.div``;

const Logo = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #14b8a6;
  margin-bottom: 0.5rem;
`;

const TagLine = styled.p`
  font-size: 0.875rem;
  color: #94a3b8;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  font-size: 0.875rem;
  color: #94a3b8;
  transition: color 0.2s ease;

  &:hover {
    color: #14b8a6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1e293b;
  border-radius: 8px;
  color: #94a3b8;
  font-size: 1.125rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #14b8a6;
    color: #14b8a6;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: #1e293b;
  margin: 2rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #64748b;
`;
