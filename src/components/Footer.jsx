import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { footer } from "../localizations/strings";
import { useSelector } from "react-redux";


const icons = [
  <FaFacebookF key={1} />,
  <FaTwitter key={3} />,
  <FaInstagram key={2} />,
];

export const Footer = () => {
  const language = useSelector((state) => state.language.language);
  const label = footer[language];

  return (
    <FooterContainer>
      <Name>{label.name}</Name>
      <SocialIcons>
        {icons.map((e, i) => (
          <Icon key={i}>{e}</Icon>
        ))}
      </SocialIcons>
      <Copyright>
        © {new Date().getFullYear()} {label.copyright}
      </Copyright>
    </FooterContainer>
    
  );
};

const FooterContainer = styled.div`
  background-color: #1f1f1f;
  padding: 40px;
  text-align: center;
  color: white;

  @media (max-width: 480px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 1024px) {
    padding: 30px;
  }
`;

const Name = styled.div`
  font-size: 42px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 1024px) {
    font-size: 36px;
  }
`;

const SocialIcons = styled.div`
  margin-top: 30px;

  @media (max-width: 480px) {
    margin-top: 15px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }

`;

const Icon = styled.a`
  color: white;
  font-size: 28px;
  margin: 0 10px;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #cf1b1b;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

`;

const Copyright = styled.p`
  font-size: 22px;
  margin-top: 30px;
  
  @media (max-width: 480px) {
    font-size: 16px;
    margin-top: 15px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
`;

