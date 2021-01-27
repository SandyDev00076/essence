import React, { useEffect, useRef } from "react";
import { animateCard } from "../../utils";
import { BPCard } from "../../utils/bpAbout";

import styles from "./Card.module.scss";

interface Props extends BPCard {
  index: number;
}
const Card = ({ title, content, index }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateCard(cardRef.current, index);
  }, [index]);

  return (
    <section ref={cardRef} className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{content}</div>
    </section>
  );
};

export default Card;
