import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UIProvider } from "./context/UIContext";
let postDate = [
    {id: 1, message: 'Hi, how are you', like: '71', repost: '10'},
    {id: 2, message: 'It`s my firs post', like: '21', repost: '1'},
    {id: 3, message: 'Hi, good and you?', like: '51', repost: '20'},
    {id: 4, message: 'Idioit', like: '-100', repost: '10'}
]
ReactDOM.render(
  <React.StrictMode>
    <UIProvider>
      <App postDate={postDate}/>
    </UIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
