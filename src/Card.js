import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import renderCard from "./rednderCard.js";
const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};
export const Card = ({ id, value, index, moveCard, color }) => {
  const ref = useRef(null);
  const [{}, drop] = useDrop({
    accept: ItemTypes.CARD,

    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      // console.log(item.id, " is hover on ", index);
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      moveCard(dragIndex, hoverIndex, item.id, id);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = index;
    },
  });
  // [ { PropsObject} , DOMRef ] = useDrag(); DOMRef is ref to connect to DOM element
  // useDrag take itemObject, events(drag,drop.hover etc) function to be executed upon given events, collectingFunctions
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect(monitor) {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });
  const opacity = isDragging ? 0 : 1;

  // if (id !== 1) drop(ref);
  // drag(ref);
  drag(drop(ref)); // this just give value to ref
  // console.log(ref);
  return (
    <div ref={ref} style={{ ...style, opacity, backgroundColor: color }}>
      {typeof value !== "string" ? (
        value.map((card, i) => renderCard(card, i, moveCard))
      ) : (
        <span>{value + " " + index}</span>
      )}
    </div>
  );
};
