import { Colors } from "common/styles";
import styled, { css } from "styled-components";
import { CardProps } from "./interfaces";

export const Content = styled.div`
  padding-top: 3rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const TitlePage = styled.div`
  font-size: 5rem;
  font-weight: bold;
  color: ${Colors.normal.blue};
  margin-bottom: 4rem;
`;

export const Card = styled.div`
  ${({ color }: CardProps) => css`
    display: flex;
    width: 85%;
    background-color: ${Colors.normal.blue};
    color: ${Colors.normal.white};
    padding: 1rem;
    margin-bottom: 1.75rem;
    a {
      color: ${Colors.normal.green};
    }
    ${color === "green" &&
    css`
      background-color: ${Colors.normal.green};
      color: ${Colors.normal.blue};
      a {
        color: ${Colors.normal.blue};
      }
    `}
  `}
`;

export const ProjectPicture = styled.img`
  width: 30vw;
  height: 17vw;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.div`
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.6rem;
`;
