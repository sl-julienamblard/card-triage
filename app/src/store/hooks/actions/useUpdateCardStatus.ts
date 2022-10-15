import { CardStatus } from "../../../types";
import { useStore } from "./useStore";

export const useUpdateCardStatus = () => {
  const [, dispatch] = useStore();
  return (id: number, status: CardStatus) => {
    dispatch({ type: "UPDATE", id, status });
  };
};
