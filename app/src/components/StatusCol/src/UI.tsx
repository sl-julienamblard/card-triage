import styled from "styled-components";
import { Box } from "../../Primitives/Box";

export const Placeholder = styled.li`
  margin-bottom: 16px;
  border: dashed 2px #a5a5a5;
  min-height: 110px;
`;

export const Container = styled(Box)`
  padding: 8px;
  width: 100%;
  background-color: #ededed;
  ${Placeholder} {
    display: none;
  }
  &:hover {
    ${Placeholder} {
      display: block;
    }
  }
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
`;
export const Item = styled.li<{ isGrab: boolean }>`
  margin-bottom: 16px;
  min-height: 110px;
  user-select: none;
  position: ${({ isGrab }) => (isGrab ? "fixed" : "relative")};
  transform: rotate(${({ isGrab }) => (isGrab ? 2 : 0)}deg);
  transition: 0.3s transform;
`;
