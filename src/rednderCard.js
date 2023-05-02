import { Card } from "./Card.js";
export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const renderCard = (card, index, moveCard) => {
  if (card.text === undefined) {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        value={card.value}
        moveCard={moveCard}
        color={card.color === undefined ? "white" : card.color}
      />
    );
  } else {
    // console.log(typeof card.text);

    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        value={card.text}
        moveCard={moveCard}
        color={card.color === undefined ? "white" : card.color}
      />
    );
  }
};

export default renderCard;
