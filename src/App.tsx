import React, { useEffect, useRef, useState } from "react";
import "./styles/globals.scss";
import BPInputs from "./components/BPInputs";
import { ReactComponent as CheckIcon } from "./assets/icons/arrow_forward-24px.svg";
import { ReactComponent as ResetIcon } from "./assets/icons/arrow_back-24px.svg";
import { BTN_FADE_ANIM_DURATION } from "./App.constants";
import { animateBtnAppearance, animateBtnDisappearance } from "./utils";
import { readings } from "./stores/readingStore";
import { Observer } from "mobx-react-lite";
import { getBPState } from "./utils/bpAbout";
import Card from "./components/Card";

import styles from "./App.module.scss";

function App() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const checkBtnRef = useRef<HTMLButtonElement>(null);
  const resetBtnRef = useRef<HTMLButtonElement>(null);

  const [entered, setEntered] = useState(false);
  const [sysInput, setSysInput] = useState("");
  const [diaInput, setDiaInput] = useState("");

  useEffect(() => {
    if (!entered) animateBtnAppearance(checkBtnRef.current);
    else animateBtnAppearance(resetBtnRef.current);
  }, [entered]);

  function checkBPValues() {
    animateBtnDisappearance(checkBtnRef.current);
    readings.setSystolic(sysInput);
    readings.setDiastolic(diaInput);
    setTimeout(() => {
      setEntered(true);
    }, BTN_FADE_ANIM_DURATION);
  }

  function resetBPValues() {
    animateBtnDisappearance(resetBtnRef.current);
    setSysInput("");
    setDiaInput("");
    setTimeout(() => {
      setEntered(false);
      readings.setSystolic("");
      readings.setDiastolic("");
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
        onEnterHit={() =>
          !entered ? checkBtnRef.current?.click() : resetBtnRef.current?.click()
        }
      />
      <Observer>
        {() => (
          <>
            {entered && (
              <>
                {getBPState(readings.systolic, readings.diastolic).cards.map(
                  (card, index) => (
                    <Card
                      key={index}
                      title={card.title}
                      content={card.content}
                      index={index}
                    />
                  )
                )}
              </>
            )}
          </>
        )}
      </Observer>
      {!entered ? (
        <button
          ref={checkBtnRef}
          className={styles.checkBtn}
          onClick={checkBPValues}
          disabled={!sysInput || !diaInput}
        >
          <CheckIcon />
        </button>
      ) : (
        <button
          ref={resetBtnRef}
          className={styles.resetBtn}
          onClick={resetBPValues}
        >
          <ResetIcon />
        </button>
      )}
    </div>
  );
}

export default App;
