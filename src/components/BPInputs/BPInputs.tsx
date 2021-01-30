import React, { useEffect, useRef } from "react";
import { animateCard } from "../../utils";
import styles from "./BPInputs.module.scss";

interface Props {
  sys: string;
  dia: string;
  setSys: React.Dispatch<React.SetStateAction<string>>;
  setDia: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
  onEnterHit: () => void;
}
const BPInputs = ({
  sys,
  setSys,
  dia,
  setDia,
  disabled,
  onEnterHit,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateCard(containerRef.current);
  }, []);

  function onKeyPress(e: React.KeyboardEvent<HTMLFormElement>) {
    if (e.key === "Enter") onEnterHit();
  }

  return (
    <section className={styles.container} ref={containerRef}>
      <form className={styles.inputs} onKeyUp={onKeyPress}>
        <input
          placeholder="Sys"
          type="number"
          name="systolic"
          max={190}
          min={70}
          value={sys}
          onChange={(e) => setSys(e.target.value)}
          readOnly={disabled}
          autoFocus
        />
        <span className={styles.divider}>/</span>
        <input
          placeholder="Dia"
          type="number"
          name="diastolic"
          max={100}
          min={40}
          value={dia}
          onChange={(e) => setDia(e.target.value)}
          readOnly={disabled}
        />
      </form>
      <span className={styles.info}>
        All units are in <strong>mmHg</strong>
      </span>
    </section>
  );
};

export default BPInputs;
