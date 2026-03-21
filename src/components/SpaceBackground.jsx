import styled, { keyframes } from "styled-components";
import { useMemo } from "react";

export const SpaceBackground = () => {
  const stars = useMemo(() => 
    Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
    })), []);

  const shootingStars = useMemo(() => 
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      top: Math.random() * 50,
      delay: Math.random() * 8 + i * 3,
      duration: Math.random() * 1 + 0.5,
    })), []);

  return (
    <BackgroundWrapper>
      {/* Stars */}
      {stars.map((star) => (
        <Star
          key={star.id}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <ShootingStar
          key={star.id}
          style={{
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Planets */}
      <Planet1 />
      <Planet2 />
      <Planet3 />

      {/* Space Shuttle */}
      <ShuttleWrapper>
        <Shuttle>
          <ShuttleBody />
          <ShuttleWingLeft />
          <ShuttleWingRight />
          <ShuttleWindow />
          <ShuttleFlame />
        </Shuttle>
      </ShuttleWrapper>

      {/* Nebula Effects */}
      <Nebula1 />
      <Nebula2 />
    </BackgroundWrapper>
  );
};

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const shoot = keyframes`
  0% { transform: translateX(-100px) translateY(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateX(calc(100vw + 100px)) translateY(100px); opacity: 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const orbit1 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(30px, -20px) rotate(180deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`;

const orbit2 = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(-20px, 30px); }
  100% { transform: translate(0, 0); }
`;

const shuttleFly = keyframes`
  0% { transform: translate(-200px, 200px) rotate(-30deg); opacity: 0; }
  10% { opacity: 1; }
  50% { transform: translate(calc(50vw - 100px), calc(50vh - 200px)) rotate(-25deg); }
  90% { opacity: 1; }
  100% { transform: translate(calc(100vw + 200px), -200px) rotate(-20deg); opacity: 0; }
`;

const flameFlicker = keyframes`
  0%, 100% { transform: scaleX(1) scaleY(1); opacity: 0.9; }
  25% { transform: scaleX(1.1) scaleY(0.9); opacity: 1; }
  50% { transform: scaleX(0.9) scaleY(1.1); opacity: 0.8; }
  75% { transform: scaleX(1.05) scaleY(0.95); opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: radial-gradient(ellipse at bottom, #0d1117 0%, #0a0f14 50%, #050709 100%);
`;

const Star = styled.div`
  position: absolute;
  background: #ffffff;
  border-radius: 50%;
  animation: ${twinkle} ease-in-out infinite;
  box-shadow: 0 0 6px 1px rgba(255, 255, 255, 0.3);
`;

const ShootingStar = styled.div`
  position: absolute;
  left: -100px;
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, #14b8a6, transparent);
  animation: ${shoot} linear infinite;
  border-radius: 2px;
  box-shadow: 0 0 10px 2px rgba(20, 184, 166, 0.5);
`;

const Planet1 = styled.div`
  position: absolute;
  top: 15%;
  right: 10%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e3a5f 0%, #0d1f33 50%, #051525 100%);
  box-shadow: 
    inset -15px -10px 30px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(30, 58, 95, 0.3),
    0 0 40px rgba(30, 58, 95, 0.2);
  animation: ${orbit1} 40s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -10%;
    width: 120%;
    height: 10px;
    background: linear-gradient(90deg, transparent, rgba(100, 150, 200, 0.2), transparent);
    transform: rotate(-10deg);
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const Planet2 = styled.div`
  position: absolute;
  bottom: 20%;
  left: 5%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a3728 0%, #2d1f15 50%, #1a120d 100%);
  box-shadow: 
    inset -20px -15px 40px rgba(0, 0, 0, 0.6),
    inset 8px 8px 25px rgba(74, 55, 40, 0.3),
    0 0 60px rgba(74, 55, 40, 0.15);
  animation: ${orbit2} 50s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    top: 20%;
    left: 15%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(60, 45, 35, 0.5);
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const Planet3 = styled.div`
  position: absolute;
  top: 60%;
  right: 15%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #14b8a6 0%, #0d7377 50%, #064e4e 100%);
  box-shadow: 
    inset -8px -6px 15px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(20, 184, 166, 0.3);
  animation: ${float} 8s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const ShuttleWrapper = styled.div`
  position: absolute;
  animation: ${shuttleFly} 25s linear infinite;
`;

const Shuttle = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
`;

const ShuttleBody = styled.div`
  position: absolute;
  width: 50px;
  height: 18px;
  background: linear-gradient(180deg, #e8e8e8 0%, #b8b8b8 50%, #888888 100%);
  border-radius: 25px 8px 8px 25px;
  top: 6px;
  left: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const ShuttleWingLeft = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0 solid transparent;
  border-bottom: 12px solid #666;
  top: 0;
  left: 25px;
  transform: rotate(-5deg);
`;

const ShuttleWingRight = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0 solid transparent;
  border-top: 12px solid #666;
  bottom: 0;
  left: 25px;
  transform: rotate(5deg);
`;

const ShuttleWindow = styled.div`
  position: absolute;
  width: 8px;
  height: 6px;
  background: linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%);
  border-radius: 50%;
  top: 10px;
  left: 35px;
  box-shadow: 0 0 8px rgba(79, 195, 247, 0.6);
`;

const ShuttleFlame = styled.div`
  position: absolute;
  right: 50px;
  top: 8px;
  width: 25px;
  height: 14px;
  background: linear-gradient(90deg, #ff6b35, #ffa500, #ffff00, transparent);
  border-radius: 0 50% 50% 0;
  animation: ${flameFlicker} 0.15s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.8);
  transform-origin: right center;
`;

const Nebula1 = styled.div`
  position: absolute;
  top: 10%;
  left: 20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(20, 184, 166, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  animation: ${pulse} 10s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Nebula2 = styled.div`
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(99, 102, 241, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(50px);
  animation: ${pulse} 12s ease-in-out infinite reverse;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
