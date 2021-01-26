import React from "react";
import "./styles/globals.scss";
import styles from "./App.module.scss";
import BPInputs from "./components/BPInputs";

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.appTitle}>Essence</h1>
      <BPInputs />
    </div>
  );
}

export default App;
