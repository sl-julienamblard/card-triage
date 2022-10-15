import styled from "styled-components";
import { CardStatus } from "../../../../types";
import { statusColors } from "./constants";

export const Container = styled.p<{ taskStatus: CardStatus }>`
  position: absolute;
  top: 8px;
  right: 8px;
  color: ${({ taskStatus }) => statusColors[taskStatus]};
  font-size: 10px;
  font-weight: 500;
`;
