import { Colors } from "common/styles";
import styled, { css } from "styled-components";
import { CardProps } from "./interfaces";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 1.75rem 0 0;
`;

export const Card = styled.div`
  ${({ color }: CardProps) => css`
    width: 48.1%;
    min-height: 10rem;
    background-color: ${Colors.normal.blue};
    padding: 2rem;
    color: ${Colors.normal.white};
    margin: 0 0rem 1.75rem 1.75rem;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    ${color === "green" &&
    css`
      background-color: ${Colors.normal.green};
      color: ${Colors.normal.blue};
    `}

    @media (max-width: 1140px) {
      width: 90%;
    }
    @media (min-width: 1800px) {
      width: 32%;
    }
  `}
`;

export const Title = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 4rem;
`;

export const Text = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const ProfileContainer = styled.div`
  width: 48.1%;
  margin: 0 0rem 1.75rem 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1140px) {
    width: 90%;
  }
  @media (min-width: 1800px) {
    width: 32%;
  }
`;

export const ProfileImage = styled.img`
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
`;

export const ContactContainer = styled.div`
  width: 100%;
  padding: 8rem;
`;
