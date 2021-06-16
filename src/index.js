import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/Redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import { UIProvider } from "./context/UIContext";
import { BrowserRouter } from "react-router-dom";

export  let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <UIProvider>
                <BrowserRouter>
                    <App state={state}
                         dispatch={store.dispatch.bind(store)}
                    />
                </BrowserRouter>
            </UIProvider>
        </React.StrictMode>,
        document.getElementById("root"));
}
rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
