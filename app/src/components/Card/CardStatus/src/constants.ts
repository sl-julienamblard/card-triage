import { CSSProperties } from "react";
import { CardStatus } from "../../../../types";

export const statusColors: {
  [k in CardStatus]: CSSProperties["color"];
} = {
  PENDING: "blue",
  REJECTED: "red",
  DONE: "green",
};
