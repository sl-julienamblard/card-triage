import { FC, useCallback, useMemo } from "react";
import { Arrhythmias, CardStatus } from "../../../types";
import { CardItem } from "../../Card";
import {
  useSelectCards,
  useSelectFilter,
  useUnGrab,
} from "../../../store/hooks";
import { StatusItem } from "./StatusItem";
import { useSelectGrabItem, useUpdateCardStatus } from "../../../store/hooks";
import { Container, Placeholder, List } from "./UI";

export const StatusCol: FC<{
  status: CardStatus;
  allowedDropStatus?: CardStatus[];
  title: string;
}> = ({ title, status, allowedDropStatus }) => {
  const cards = useSelectCards();
  const grabItem = useSelectGrabItem();
  const updateCard = useUpdateCardStatus();
  const grabStop = useUnGrab();
  const filterText = useSelectFilter();

  const filteredCards = useMemo(() => {
    const filterByStatus = cards.filter(
      ({ status: cardStatus }) => status === cardStatus
    );
    if (!filterText) return filterByStatus;
    else {
      const reg = new RegExp(filterText, "i");
      return filterByStatus.filter(
        ({ arrhythmias, patient_name }) =>
          arrhythmias.includes(filterText as Arrhythmias) ||
          patient_name.match(reg)
      );
    }
  }, [cards, filterText, status]);

  /**
   * handle when user drop item in col
   */
  const handleMouseDown = useCallback(() => {
    //check if status is eligible
    grabItem !== null &&
      allowedDropStatus?.includes(grabItem?.status) &&
      updateCard(grabItem.id, status);

    grabStop();
  }, [grabItem, allowedDropStatus, status]);

  return (
    <Container noHover>
      <div onMouseUp={handleMouseDown}>
        <h3>{title}</h3>
        {!!filteredCards && (
          <List>
            {grabItem !== null &&
              !!allowedDropStatus?.includes(grabItem.status) && <Placeholder />}
            {filteredCards.map((card) => (
              <StatusItem key={card.id} id={card.id}>
                <CardItem card={card} />
              </StatusItem>
            ))}
          </List>
        )}
      </div>
    </Container>
  );
};
