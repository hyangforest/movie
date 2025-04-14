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
