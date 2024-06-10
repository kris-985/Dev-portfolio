import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { footer } from "../localizations/strings";

export const Footer = () => {
  const { language } = useSelector((state) => state.languageReducer);
  const label = footer[language];

  return (
    <FooterContainer>
      <Name>{label.name}</Name>
      <SocialIcons>
        <Icon>
          <FaFacebookF />
        </Icon>
        <Icon>
          <FaInstagram />
        </Icon>
        <Icon>
          <FaTwitter />
        </Icon>
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

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Name = styled.div`
  font-size: 42px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SocialIcons = styled.div`
  margin-top: 30px;

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

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Copyright = styled.p`
  font-size: 22px;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
`;