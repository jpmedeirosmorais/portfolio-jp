import { Colors } from "common/styles";
import styled, { css } from "styled-components";
import { ItemProps } from "./interfaces";

export const Content = styled.div`
  height: 100vh;
  width: 20rem;
  background-color: ${Colors.normal.blue};
  position: fixed;
  padding: 3.5rem 0.5rem 1rem 3.2rem;
`;

export const Brand = styled.div``;

export const Items = styled.div`
  margin-top: 8rem;
`;

export const Item = styled.div`
  margin-bottom: 3.3rem;
  ${({ isGreen }: ItemProps) => css`
    a {
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: bold;
      color: ${Colors.normal.white};
      ${isGreen &&
      css`
        color: ${Colors.normal.green};
      `}
    }
  `}
`;
