import React, { useState, useRef } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Button, notification } from "antd";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const Home: NextPage = () => {
  const [billInput, setBillInput] = useState<any>("");
  const [service, setService] = useState<any>("");
  const [splitInput, setSplitInput] = useState<any>("");
  const [bill, setBill] = useState<any>(0.0);
  const [warning, setWarning] = useState(false);
  function billHandler(e: any) {
    setBillInput(e.target.value);
  }
  function splitHandler(e: any) {
    setSplitInput(e.target.value);
  }
  function resetHandler(e: any) {
    e.preventDefault();
    setBillInput("");
    setService("");
    setSplitInput("");
    setBill(0);
  }
  function selected(e: any) {
    setService(parseInt(e.target.value));
  }
  function submitHandler(e: any) {
    e.preventDefault();
    if (billInput != null && service != "" && splitInput != null) {
      setBill((service / 100) * (billInput / splitInput));
      return;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h3 className={styles.title}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tip Calculator
        </h3>
        <form className={styles.inputs}>
          <label htmlFor="bill">How much was the bill?</label>
          <br />
          <input
            type="number"
            id="bill"
            onChange={billHandler}
            value={billInput}
          />
          <br /> <br />
          <label htmlFor="bill">How good was the service?</label>
          <br />
          <select onChange={selected} value={service}>
            <option value=""></option>
            <option value="10">Terrible</option>
            <option value="20">Not good</option>
            <option value="30">Good</option>
            <option value="40">Great</option>
            <option value="50">Fantastic</option>
          </select>
          <br /> <br />
          <label htmlFor="bill">How many people are splitting the bill?</label>
          <br />
          <input
            type="number"
            id="bill"
            onChange={splitHandler}
            value={splitInput}
          />
          <br /> <br />
          <div className={styles.buttons}>
            <button className={styles.button1} onClick={resetHandler}>
              Reset
            </button>
            <button className={styles.button2} onClick={submitHandler}>
              Calculate
            </button>
          </div>
          <div className={styles.text}>
            <p>You should tip:</p>
            <p className={styles.tip}>{bill.toFixed(2)}$</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
