import React, { useContext, useState } from "react";
import { Success } from "../UI/Success";
import s from "./Dialogs.module.css";
import { UIContext } from "../../context/UIContext";
import { Error } from "../UI/Error";

const Dialogs = (props) => {
  const UI = useContext(UIContext);
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState({
    r: 0,
    g: 0,
    b: 0,
  });
  const divStyle = {
    background: `rgb(${color.r},${color.g},${color.b})`,
    height: `100%`,
  };
  const ShowSuccess = () => {
    UI.setSuccess({ state: true, msg: msg });
    setTimeout(() => {
      UI.setSuccess({ state: false, msg: "" });
    }, 5000);
  };
  const HideSuccess = () => {
    UI.setSuccess({ state: false, msg: "" });
  };
  const ShowError = () => {
    UI.setError({ state: true, msg: "Andiy XUI" });
    setTimeout(() => {
      UI.setError({ state: false, msg: "" });
    }, 4000);
  };
  const HandleChange = (event) => {
    setMsg(event.target.value);
  };
  const RandomColor = () => {
    setColor({
      r: GetRandomInt(0, 256),
      g: GetRandomInt(0, 256),
      b: GetRandomInt(0, 256),
    });
  };
  const GetRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  };

  return (
    <div style={divStyle}>
      <span>{JSON.stringify(color)}</span>
      <button onClick={RandomColor}>Randomize</button>

      {UI.error.state ? <Error /> : null}
      <button onClick={ShowError}>Show_Error</button>

      {UI.success.state ? <Success /> : null}
      <button onClick={ShowSuccess}>Show_SEX</button>
      {!UI.success.state ? null : (
        <button onClick={HideSuccess}>Hide_Sex</button>
      )}

      <input type="text" value={msg} onChange={HandleChange} />
    </div>
  );
};

export default Dialogs;
