import { CardData, CardStatus } from "../types";

export type Store = {
  grabbedItem: CardData | null;
  cards: CardData[];
  filterText: string;
};

export type Actions =
  | { type: "ADD"; data: CardData[] }
  | { type: "UPDATE_FILTER"; text: string }
  | { type: "GRAB"; id: number }
  | { type: "UNGRAB" }
  | { type: "UPDATE"; id: number; status: CardStatus };

export type Reducer = (store: Store, action: Actions) => Store;

export type UseStore = [Store, (action: Actions) => void];
