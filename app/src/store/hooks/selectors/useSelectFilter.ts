import { useStore } from "../";

export const useSelectFilter = (): string => {
  const [{ filterText }] = useStore();
  return filterText;
};
