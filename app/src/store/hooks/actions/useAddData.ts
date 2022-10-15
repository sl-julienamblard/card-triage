import { CardData } from "../../../types";
import { useStore } from "./useStore";

export const useAddData = () => {
  const [, dispatch] = useStore();
  return (data: CardData[]) => {
    dispatch({ type: "ADD", data });
  };
};
