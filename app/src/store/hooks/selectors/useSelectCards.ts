import { CardData } from "../../../types";
import { useStore } from "../";

export const useSelectCards = (): CardData[] => {
  const [{ cards }] = useStore();
  return cards;
};
