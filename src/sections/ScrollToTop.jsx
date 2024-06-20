import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from "react-icons/fa";


export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ScrollButton onClick={scrollToTop} isVisible={isVisible}>
      <FaArrowUp />
    </ScrollButton>
  );
};

const ScrollButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-color: #cf1b1b;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.5s, visibility 0.5s;
  z-index: 1000;

  &:hover {
    background-color: #cf1b1b;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;
