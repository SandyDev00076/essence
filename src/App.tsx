import React, { useEffect, useRef, useState } from "react";
import "./styles/globals.scss";
import BPInputs from "./components/BPInputs";
import { ReactComponent as CheckIcon } from "./assets/icons/arrow_forward-24px.svg";
import { BTN_FADE_ANIM_DURATION } from "./App.constants";

import styles from "./App.module.scss";
import { animateBtnAppearance, animateBtnDisappearance } from "./utils";

function App() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const checkBtnRef = useRef<HTMLButtonElement>(null);

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    animateBtnAppearance(checkBtnRef.current);
  }, []);

  function checkBPValues() {
    animateBtnDisappearance(checkBtnRef.current);
    setTimeout(() => {
      setEntered(true);
    }, BTN_FADE_ANIM_DURATION);
  }

  return (
    <div className={styles.App}>
      <h1 ref={titleRef} className={styles.appTitle}>
        Essence
      </h1>
      <BPInputs disabled={entered} />
      {!entered && (
        <button
          ref={checkBtnRef}
          className={styles.checkBtn}
          onClick={checkBPValues}
        >
          <CheckIcon />
        </button>
      )}
    </div>
  );
}

export default App;
