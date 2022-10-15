import { FC, memo } from "react";
import { Arrhythmias } from "../../../../types";
import { Container } from "./UI";

export const CardArrhythmias: FC<{ arrhythmias: Arrhythmias[] }> = memo(
  ({ arrhythmias }) => <Container>{arrhythmias.join(", ")}</Container>
);
