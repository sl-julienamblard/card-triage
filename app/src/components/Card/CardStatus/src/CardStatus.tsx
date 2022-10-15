import { FC, memo } from "react";
import { CardStatus as Status } from "../../../../types";
import { Container } from "./UI";

export const CardStatus: FC<{ status: Status }> = memo(({ status }) => (
  <Container taskStatus={status}>{status}</Container>
));
