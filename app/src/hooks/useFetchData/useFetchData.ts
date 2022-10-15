import { useEffect, useState } from "react";
import { CardData } from "../../types";

export const useFetchData = (): CardData[] | [] => {
  const [get, set] = useState<CardData[]>([]);
  const [state, setState] = useState<"PENDING" | "LOADING" | "LOADED">(
    "PENDING"
  );
  useEffect(() => {
    if (state === "PENDING") {
      setState("LOADING");
      fetch("http://localhost:3000/cards")
        .then((response) => response.json())
        .then((data) => {
          set(data);
          setState("LOADED");
        })
        .catch(console.error);
    }
  }, []);
  return get;
};
