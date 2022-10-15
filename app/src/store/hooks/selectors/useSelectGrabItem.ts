import { CardData } from "../../../types";
import { useStore } from "../";

export const useSelectGrabItem = (): CardData | null => {
  const [{ grabbedItem }] = useStore();
  return grabbedItem;
};
