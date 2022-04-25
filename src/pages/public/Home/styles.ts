import styled from "styled-components";

export const Content = styled.div`
  padding: 2rem 0 2rem 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BannerContent = styled.div`
  text-align: center;
  margin-bottom: 13rem;

  @media (max-width: 930px) {
    img {
      width: calc(100vw - 25rem);
    }
  }
`;
