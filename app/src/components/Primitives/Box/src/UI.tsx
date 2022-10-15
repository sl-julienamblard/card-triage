import styled, { css } from "styled-components";

export const Container = styled.div<{ noHover: boolean }>`
  padding: 8px;
  background-color: white;
  border-radius: 4px;
  transition: 0.3s all;
  ${({ noHover }) =>
    !noHover &&
    css`
      &:hover {
        box-shadow: 2px 4px 8px rgb(0 0 0 / 20%);
      }
    `}
`;
