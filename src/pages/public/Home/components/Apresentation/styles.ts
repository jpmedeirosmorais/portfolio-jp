import { Colors } from "common/styles";
import styled from "styled-components";

export const Content = styled.div`
  margin-bottom: 3.5rem;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.normal.green};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  width: 103.2rem;
  height: 22.4rem;
  @media (max-width: 1250px) {
    width: calc(100vw - 22rem);
    height: auto;
  }
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  position: relative;
  top: -10.8rem;

  @media (max-width: 700px) {
    width: calc(20vw);
    height: calc(20vw);
    top: calc(-1 * (20vw / 2));
  }
`;

export const TextApresentation = styled.div`
  text-align: center;
  position: relative;
  top: -10.8rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${Colors.normal.blue};
  padding: 1.9rem;

  @media (max-width: 700px) {
    top: calc(-1 * (20vw / 2));
  }
`;
