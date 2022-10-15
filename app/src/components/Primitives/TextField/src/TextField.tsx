import { type ChangeEventHandler, type FC } from "react";
import { Container, Field, LabelText } from "./UI";

export const TextField: FC<{
  label?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}> = ({ onChange, label, value }) => {
  return (
    <Container>
      {label && <LabelText>{label}</LabelText>}
      <Field type="text" onChange={onChange} value={value} />
    </Container>
  );
};
