import { ChangeEventHandler, useCallback, useState } from "react";
import { useUpdateFilter } from "../../../store/hooks";
import { TextField } from "../../Primitives/TextField";

export const TextFilter = () => {
  const updateFilterText = useUpdateFilter();
  const [get, set] = useState<string>("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      set(event.currentTarget.value);
      updateFilterText(event.currentTarget.value);
    },
    []
  );
  return (
    <TextField label="filter patients" value={get} onChange={handleChange} />
  );
};
