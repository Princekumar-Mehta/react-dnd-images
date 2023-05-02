import update from "immutability-helper";
import { useState } from "react";
import renderCard from "./rednderCard";
const style = {
  width: 400,
};
export const Container = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      value: [
        {
          id: 11,
          text: "card 1 1",
        },
        {
          id: 12,
          text: "card 1 2",
        },
      ],
      color: "red",
    },
    {
      id: 2,
      value: [
        {
          id: 21,
          text: "card 2 1",
        },
        {
          id: 22,
          text: "card 2 2",
        },
      ],
      color: "brown",
    },
    {
      id: 3,
      value: [
        {
          id: 31,
          text: "card 3 1",
        },
        {
          id: 32,
          text: "card 3 2",
        },
      ],
      color: "lightpink",
    },
    {
      id: 4,
      value: [
        {
          id: 41,
          text: "card 4 1",
        },
        {
          id: 42,
          text: "card 4 2",
        },
      ],
      color: "lightblue",
    },
    {
      id: 5,
      value: [
        {
          id: 51,
          text: "card 5 1",
        },
        {
          id: 52,
          text: "card 5 2",
        },
      ],
      color: "lightgreen",
    },
    {
      id: 6,
      value: [
        {
          id: 61,
          text: "card 6 1",
        },
        {
          id: 62,
          text: "card 6 2",
        },
      ],
      color: "blue",
    },
    {
      id: 7,
      value: [
        {
          id: 71,
          text: "card 7 1",
        },
        {
          id: 72,
          text: "card 7 2",
        },
      ],
      color: "green",
    },
  ]);
  // console.log(cards);
  // console.log(cards);
  const moveCard = (dragIndex, hoverIndex, dragId, hoverId) => {
    // console.log(dragIndex, " ", hoverIndex, " ", dragId, " ", hoverId);
    if (dragId < 10 && hoverId > 10) {
      return;
    } else if (dragId > 10 && hoverId < 10) {
      return;
    }
    if (dragId < 10) {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    } else {
      let tempCards = cards;
      console.log(
        Number(String(dragId)[0]) - 1,
        " ",
        Number(String(hoverId)[0]) - 1
      );
      // console.log(tempCards[Number(String(dragId)[0]) - 1], dragIndex);
      // console.log(tempCards[Number(String(hoverId)[0]) - 1], hoverIndex);
      let arr1 = [
        tempCards[Number(String(dragId)[0] - 1)].value[0],
        tempCards[Number(String(hoverId)[0]) - 1].value[1],
      ];
      let arr2 = [
        tempCards[Number(String(dragId)[0] - 1)].value[1],
        tempCards[Number(String(hoverId)[0]) - 1].value[0],
      ];
      // console.log(arr1);
      // console.log(arr2);

      tempCards[Number(String(dragId)[0] - 1)].value = arr1;
      tempCards[Number(String(hoverId)[0] - 1)].value = arr2;
      console.log(tempCards);
      setCards(tempCards);
    }
  };
  console.log(cards);
  return (
    <>
      <div style={style}>
        {cards.map((card, i) => renderCard(card, i, moveCard))}
      </div>
    </>
  );
};
