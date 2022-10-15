import { useContext } from "react";
import { Context } from "../../provider";
import { type UseStore } from "../../types";

export const useStore = (): UseStore => useContext<any>(Context);
