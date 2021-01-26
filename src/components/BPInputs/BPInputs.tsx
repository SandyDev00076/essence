import React, { useEffect, useRef } from "react";
import { animateCard } from "../../utils";
import styles from "./BPInputs.module.scss";

interface Props {
  disabled: boolean;
}
const BPInputs = ({ disabled }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateCard(containerRef.current);
  }, []);

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.inputs}>
        <input
          placeholder="Sys"
          type="number"
          name="systolic"
          max={200}
          min={60}
          readOnly={disabled}
        />
        <span className={styles.divider}>/</span>
        <input
          placeholder="Dia"
          type="number"
          name="diastolic"
          max={100}
          min={35}
          readOnly={disabled}
        />
      </div>
      <span className={styles.info}>
        All units are in <strong>mmHg</strong>
      </span>
    </section>
  );
};

export default BPInputs;
