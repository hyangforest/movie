import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Grid = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 1rem 0.5rem;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: left;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
`;

export const SkeletonCard = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 2rem;
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export const MediaErrorBox = styled.div`
  padding: 3rem;
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
`;

export const MediaRetryButton = styled.button`
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.825rem 1.2rem;
  background: #444;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #666;
  }

  svg {
    font-weight: bold;
    width: 1.2rem;
    height: 1.2rem;
  }
`;