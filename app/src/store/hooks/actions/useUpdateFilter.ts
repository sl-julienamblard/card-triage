import { useStore } from "./useStore";

export const useUpdateFilter = () => {
  const [, dispatch] = useStore();
  return (value: string) => {
    dispatch({ type: "UPDATE_FILTER", text: value });
  };
};
