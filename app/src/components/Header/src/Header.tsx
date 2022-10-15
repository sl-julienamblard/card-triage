import { FC } from "react";
import { TextFilter } from "../../TextFilter";
import { Container } from "./UI";

export const Header: FC = () => (
  <Container>
    <h1>Nurse patient managment</h1>
    <TextFilter />
  </Container>
);
