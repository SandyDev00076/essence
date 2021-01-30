import React from "react";
import { getBPState, InvalidContent } from "../../utils/bpAbout";
import Card from "../Card";

interface Props {
  systolic: string;
  diastolic: string;
}
const Cards = ({ systolic, diastolic }: Props) => {
  const sys = parseInt(systolic);
  const dia = parseInt(diastolic);
  if (sys < 70 || sys > 190 || dia < 40 || dia > 100)
    return <Card index={0} title="Invalid input" content={InvalidContent} />;
  return (
    <>
      {getBPState(systolic, diastolic).cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          index={index}
        />
      ))}
    </>
  );
};

export default Cards;
