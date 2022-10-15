import { CardData } from "../types";
import { type Reducer } from "./types";

export const reducer: Reducer = (store, action) => {
  switch (action.type) {
    case "ADD":
      return { ...store, cards: action.data };
      break;
    case "GRAB":
      const grabbedItem =
        store.cards.find(({ id }) => id === action.id) || null;
      return { ...store, grabbedItem };
      break;
    case "UNGRAB":
      return { ...store, grabbedItem: null };
      break;
    case "UPDATE":
      const newCards: CardData[] = structuredClone(store.cards);
      const cardIndex = newCards.findIndex(({ id }) => id === action.id);
      newCards[cardIndex].status = action.status;
      return { ...store, cards: newCards };
      break;
      break;
    case "UPDATE_FILTER":
      return { ...store, filterText: action.text };
      break;
  }
};
