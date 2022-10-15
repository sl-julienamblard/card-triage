import { useStore } from "./useStore";

export const useStartGrab = () => {
  const [, dispatch] = useStore();
  return (id: number) => {
    dispatch({ type: "GRAB", id });
  };
};
