import React, { useEffect, useRef, useState } from "react";
import "./styles/globals.scss";
import BPInputs from "./components/BPInputs";
import { ReactComponent as CheckIcon } from "./assets/icons/arrow_forward-24px.svg";
import { BTN_FADE_ANIM_DURATION } from "./App.constants";
import { animateBtnAppearance, animateBtnDisappearance } from "./utils";

import styles from "./App.module.scss";
import { readings } from "./stores/readingStore";
import { Observer } from "mobx-react-lite";

function App() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const checkBtnRef = useRef<HTMLButtonElement>(null);

  const [entered, setEntered] = useState(false);
  const [sysInput, setSysInput] = useState("");
  const [diaInput, setDiaInput] = useState("");

  useEffect(() => {
    animateBtnAppearance(checkBtnRef.current);
  }, []);

  function checkBPValues() {
    animateBtnDisappearance(checkBtnRef.current);
    setTimeout(() => {
      setEntered(true);
      readings.setSystolic(sysInput);
      readings.setDiastolic(diaInput);
    }, BTN_FADE_ANIM_DURATION);
  }

  return (
    <div className={styles.App}>
      <h1 ref={titleRef} className={styles.appTitle}>
        Essence
      </h1>
      <BPInputs
        disabled={entered}
        sys={sysInput}
        setSys={setSysInput}
        dia={diaInput}
        setDia={setDiaInput}
      />
      <Observer>{() => <>{entered && <div>Hello</div>}</>}</Observer>
      {!entered && (
        <button
          ref={checkBtnRef}
          className={styles.checkBtn}
          onClick={checkBPValues}
          disabled={!sysInput || !diaInput}
        >
          <CheckIcon />
        </button>
      )}
    </div>
  );
}

export default App;
