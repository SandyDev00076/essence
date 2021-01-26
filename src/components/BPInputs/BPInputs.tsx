import React, { useEffect, useRef } from "react";
import { animateCard } from "../../utils";
import styles from "./BPInputs.module.scss";

interface Props {
  sys: string;
  dia: string;
  setSys: React.Dispatch<React.SetStateAction<string>>;
  setDia: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
}
const BPInputs = ({ sys, setSys, dia, setDia, disabled }: Props) => {
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
          value={sys}
          onChange={(e) => setSys(e.target.value)}
          readOnly={disabled}
        />
        <span className={styles.divider}>/</span>
        <input
          placeholder="Dia"
          type="number"
          name="diastolic"
          max={100}
          min={35}
          value={dia}
          onChange={(e) => setDia(e.target.value)}
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
