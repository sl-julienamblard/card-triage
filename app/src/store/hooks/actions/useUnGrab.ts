import { useStore } from "./useStore";

export const useUnGrab = () => {
  const [, dispatch] = useStore();
  return () => {
    dispatch({ type: "UNGRAB" });
  };
};
