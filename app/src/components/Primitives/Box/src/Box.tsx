import { FC, PropsWithChildren } from "react";
import { Container } from "./UI";

export const Box: FC<
  { className?: string; noHover?: boolean } & PropsWithChildren
> = ({ className, children, noHover = false }) => (
  <Container className={className} noHover={noHover}>
    {children}
  </Container>
);
