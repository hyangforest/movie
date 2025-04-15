import styled from "styled-components";

export const Card = styled.div`
  border-radius: 2rem;
  text-align: center;

  position: relative;
  overflow: hidden;
  cursor: pointer;

   &:hover {
    transform: translateY(-15px);
    box-shadow:
      0 4px 16px rgba(255, 255, 255, 0.08),
      0 8px 32px rgba(255, 255, 255, 0.1);
  }

  &:hover img {
    filter: blur(4px) brightness(0.5);
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }

  border: 1px solid rgba(255, 255, 255, 0.08);

  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.03); // 밝은 그림자
   transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
`;

export const Poster = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;

  transition: all 0.3s ease;
  display: block;
  border: none;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const Title = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);

  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;
