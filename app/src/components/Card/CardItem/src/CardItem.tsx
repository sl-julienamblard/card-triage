import { FC } from "react";
import { CardStatus } from "../../CardStatus";
import { CardData } from "../../../../types";
import { Container } from "./UI";
import { CardArrhythmias } from "../../CardArrhythmias";

export const CardItem: FC<{ card: CardData }> = ({
  card: { patient_name, arrhythmias, status },
}) => {
  return (
    <Container>
      <p>
        <strong>{patient_name}</strong>
      </p>
      <CardArrhythmias arrhythmias={arrhythmias} />
      <CardStatus status={status} />
    </Container>
  );
};
